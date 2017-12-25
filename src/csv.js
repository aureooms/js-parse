import { split , ignore } from '@aureooms/js-stream' ;

/**
 * Converts a stream of comma separated values to a stream of values.
 * @param {Stream} stream the stream to read from
 */
export default function csv ( stream ) {
	return split( ignore( stream , ' \t\n' ) , ',' ) ;
}
