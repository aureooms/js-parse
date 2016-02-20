
import split from './../tools/split' ;
import ignore from './../tools/ignore' ;

/**
 * Converts a stream of comma separated values to a stream of values.
 * @param {Stream} stream the stream to read from
 */
export function csv ( stream ) {
	return split( ignore( stream , ' \t\n' ) , ',' ) ;
}
