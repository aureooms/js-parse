
import split from './split' ;
import chain from './chain' ;

/**
 * Filters a stream by ignoring a given set of tokens.
 * @param {Stream} stream the stream to filter
 * @param {Iterable} toignore the tokens to ignore
 */
export default function ignore ( stream , toignore ) {

	return chain( split( stream , toignore ) ) ;

}
