
import { fromiterable } from './from' ;
import { toiterable } from './to' ;
import { map as _map } from 'aureooms-es-itertools' ;

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
export function map ( callable , stream ) {

	return fromiterable( _map( callable , toiterable( stream ) ) ) ;

}
