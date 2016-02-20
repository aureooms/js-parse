
/**
 * Converts an iterable to a stream.
 * @param {Iterable} _iterable the iterable to convert
 */
export const fromiterable = _iterable => fromiterator( _iterable[Symbol.iterator]( ) ) ;

/**
 * Converts an iterator to a stream.
 * @param {Iterator} _iterator the iterator to convert
 */
export const fromiterator = _iterator => fromcallable( _iterator.next.bind( _iterator ) ) ;

/**
 * Converts a callable to a stream.
 * @param {Callable} _callable the callable to convert
 */
export const fromcallable = _callable => new StreamFromCallable( _callable ) ;


/**
 * Class that wraps a callable with a stream.
 */
export class StreamFromCallable {

	constructor ( callable ) {
		this.callable = callable ;
		this.buffer = [ ] ;
	}

	read ( ) {

		if ( this.buffer.length > 0 ) return this.buffer.pop( ) ;

		const state = this.callable( ) ;

		if ( state.done ) return null ;

		return state.value ;

	}

	unread ( token ) {

		this.buffer.push( token ) ;

	}

}

/**
 * Converts a string to a stream.
 * @param {String} _string the string to convert
 * @example fromstring( '1,3,2' )
 */
export const fromstring = fromiterable ;

/**
 * Converts an array to a stream.
 * @param {Array} _array the array to convert
 */
export const fromarray = fromiterable ;
