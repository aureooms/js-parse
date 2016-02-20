import { toarray } from './toarray' ;

/**
 * Converts a stream to a string.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
export const tostring = stream => toarray( stream ).join( '' ) ;
