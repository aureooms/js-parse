
/**
 * Converts a stream to an array.
 * @param {Stream} stream the stream to read from
 */
export const array = stream => [ ...iterable( stream ) ] ;

/**
 * Converts a stream to an iterator.
 * @param {Stream} stream the stream to read from
 */
export const iterator = stream => iterable( stream )[Symbol.iterator]( ) ;

/**
 * Converts a stream to a string.
 * @param {Stream} stream the stream to read from
 */
export const string = stream => array( stream ).join( '' ) ;

/**
 * Converts a stream to an iterable.
 * @param {Stream} stream the stream to read from
 */
export function* iterable ( stream ) {

	while ( true ) {

		const token = stream.read( ) ;

		if ( token === null ) break ;

		yield token ;

	}

}
