
/**
 * Converts a stream to an array.
 * @param {Stream} stream the stream to read from
 */
export const toarray = stream => [ ...toiterable( stream ) ] ;

/**
 * Converts a stream to an iterator.
 * @param {Stream} stream the stream to read from
 */
export const toiterator = stream => toiterable( stream )[Symbol.iterator]( ) ;

/**
 * Converts a stream to a string.
 * @param {Stream} stream the stream to read from
 */
export const tostring = stream => toarray( stream ).join( '' ) ;

/**
 * Converts a stream to an iterable.
 * @param {Stream} stream the stream to read from
 */
export function* toiterable ( stream ) {

	while ( true ) {

		const token = stream.read( ) ;

		if ( token === null ) break ;

		yield token ;

	}

}
