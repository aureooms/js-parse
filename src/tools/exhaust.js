
/**
 * Exhausts a stream.
 * @param {Stream} stream the stream to read from
 */
export default function exhaust ( stream ) {

	while ( stream.read( ) !== null ) ;

}
