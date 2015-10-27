
import { iterable as from_iterable } from './from' ;

import exhaust from './exhaust' ;

/**
 * Splits a stream into a stream of streams according to some set of
 * separators.
 * @param {Stream} stream
 * @param {Iterable} sep
 */
export default function split ( stream , sep ) {

	return from_iterable( _split( stream , sep ) ) ;

}

export function* _split ( stream , sep ) {

	const _sep = new Set( sep ) ;

	while ( true ) {

		const token = stream.read( ) ;

		if ( token === null ) break ;

		if ( _sep.has( token ) ) continue ;

		const group = from_iterable( ( function* ( ) {

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
