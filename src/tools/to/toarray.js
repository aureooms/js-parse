
import { toiterable } from './toiterable' ;

/**
 * Converts a stream to an array.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
export const toarray = stream => [ ...toiterable( stream ) ] ;
