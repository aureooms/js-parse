
import { fromiterable } from './from' ;
import { toiterable } from './to' ;
import { map as _map , chain as _chain } from '@aureooms/js-itertools' ;

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
export function chain ( stream ) {

	return fromiterable( _chain( _map( toiterable , toiterable( stream ) ) ) ) ;

}
