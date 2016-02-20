
/**
 * Exhausts a stream.
 * @param {Stream} stream the stream to read from
 */
export function exhaust ( stream ) {

	while ( stream.read( ) !== null ) ;

}
