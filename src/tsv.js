import { split , ignore } from '@aureooms/js-stream' ;

/**
 * Converts a stream of tab separated values to a stream of values.
 * @param {Stream} stream the stream to read from
 */
export default function tsv ( stream ) {
	return split( ignore( stream , ' \n' ) , '\t' ) ;
}
