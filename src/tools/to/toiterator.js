import { toiterable } from './toiterable' ;

/**
 * Converts a stream to an iterator.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
export const toiterator = stream => toiterable( stream )[Symbol.iterator]( ) ;
