import test from 'ava' ;

import * as stream from '@aureooms/js-stream' ;
import * as parse from '../../src' ;

/**
 * @test {parse#tsv}
 */
test( 'can parse tsv' , t => {

	let input = '\n\n\n    1 \t22\n\t 333\t\n-44 \t-5 \t\n  \t' ;
	let tokens = stream.fromiterable( input ) ;
	tokens = parse.tsv( tokens ) ;
	tokens = stream.map( stream.tostring , tokens ) ;

	t.deepEqual(stream.toarray( tokens ), [ '1' , '22' , '333' , '-44' , '-5' ] ) ;

} ) ;
