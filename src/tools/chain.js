
import { iterable as from_iterable } from './from' ;
import { iterable as to_iterable } from './to' ;
import { map as _map , chain as _chain } from 'aureooms-js-itertools' ;

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
export default function chain ( stream ) {

	return from_iterable( _chain( _map( to_iterable , to_iterable( stream ) ) ) ) ;

}
