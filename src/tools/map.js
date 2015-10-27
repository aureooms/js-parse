
import { iterable as from_iterable } from './from' ;
import { iterable as to_iterable } from './to' ;
import { map as _map } from 'aureooms-js-itertools' ;

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
export default function map ( callable , stream ) {

	return from_iterable( _map( callable , to_iterable( stream ) ) ) ;

}
