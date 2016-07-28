
import { fromiterable } from '../from' ;

import { exhaust } from '../exhaust' ;

/**
 * Splits the input stream into a stream of streams according to some set of
 * separators. See {@link _split} for the actual implementation.
 *
 * @param {Stream} stream - The input stream.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Stream}
 */
export function split ( stream , sep ) {

	return fromiterable( _split( stream , sep ) ) ;

}

/**
 * Same as {@link split}, but returns an iterator rather than a stream.
 *
 * @param {Stream} stream - The input stream.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Iterator}
 */
export function* _split ( stream , sep ) {

	const _sep = new Set( sep ) ;

	while ( true ) {

		const token = stream.read( ) ;

		if ( token === null ) break ;

		if ( _sep.has( token ) ) continue ;

		const group = fromiterable( ( function* ( ) {

			yield token ;

			while ( true ) {

				const token = stream.read( ) ;

				if ( _sep.has( token ) ) break ;

				yield token ;

			}

		} )( ) ) ;

		yield group ;

		exhaust( group ) ;

	}

}
