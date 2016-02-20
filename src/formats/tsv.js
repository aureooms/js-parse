
import { split } from './../tools/split' ;
import { ignore } from './../tools/ignore' ;

/**
 * Converts a stream of tab separated values to a stream of values.
 * @param {Stream} stream the stream to read from
 */
export function tsv ( stream ) {
	return split( ignore( stream , ' \n' ) , '\t' ) ;
}
