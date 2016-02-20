
/**
 * Outputs the next token of a stream that is not contained in a given toskip
 * set.
 * @param {Stream} stream
 * @param {Iterable} toskip
 */
export function skip ( stream , toskip ) {

	const _toskip = new Set( toskip ) ;

	while ( true ) {

		const token = stream.read( ) ;

		if ( token === null ) return null ;

		if ( _toskip.has( token ) ) continue ;

		return token ;

	}

}

export const blanks = stream => skip( stream , ' \t\n' ) ;
