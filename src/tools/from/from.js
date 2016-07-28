
/**
 * Converts an iterable to a stream.
 * @param {Iterable} _iterable the iterable to convert
 * @function
 */
export const fromiterable = _iterable => fromiterator( _iterable[Symbol.iterator]( ) ) ;

/**
 * Converts an iterator to a stream.
 * @param {Iterator} _iterator the iterator to convert
 * @function
 */
export const fromiterator = _iterator => fromcallable( _iterator.next.bind( _iterator ) ) ;

/**
 * Converts a callable to a stream.
 * @param {Callable} _callable the callable to convert
 * @function
 */
export const fromcallable = _callable => new StreamFromCallable( _callable ) ;


/**
 * Class that wraps a callable with a stream.
 */
export class StreamFromCallable {

	/**
	 * The constructor. Stores the callable that yields values to stream.
	 *
	 * @param {Callable} callable - The callable to use.
	 * @returns {StreamFromCallable}
	 *
	 */
	constructor ( callable ) {
		this.callable = callable ;
		this.buffer = [ ] ;
	}

	/**
	 * Returns the next token in the stream.
	 *
	 * @returns {Object}
	 */
	read ( ) {

		if ( this.buffer.length > 0 ) return this.buffer.pop( ) ;

		const state = this.callable( ) ;

		if ( state.done ) return null ;

		return state.value ;

	}

	/**
	 * Puts a token back in the stream. If {@link StreamFromCallable#read} is
	 * used just after, this token will be returned.
	 *
	 * @param {Object} token - The token to put back in the stream.
	 */
	unread ( token ) {

		this.buffer.push( token ) ;

	}

}

/**
 * Converts a string to a stream.
 *
 * @example
 * fromstring( '1,3,2' ) ;
 *
 * @param {String} _string the string to convert
 * @function
 */
export const fromstring = fromiterable ;

/**
 * Converts an array to a stream.
 * @param {Array} _array the array to convert
 * @function
 */
export const fromarray = fromiterable ;
