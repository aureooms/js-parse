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
