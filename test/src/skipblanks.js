import test from 'ava' ;

import * as stream from '@aureooms/js-stream' ;
import { skipblanks } from '../../src' ;

/**
 * @test {parse#fromstring}
 * @test {parse#skipblanks}
 */
test( 'can read from string' , t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const tokens = stream.fromstring( input ) ;
	t.deepEqual( skipblanks( tokens ) , '1' ) ;
	t.deepEqual( skipblanks( tokens ) , ',' ) ;
	t.deepEqual( skipblanks( tokens ) , '2' ) ;
	t.deepEqual( skipblanks( tokens ) , '2' ) ;
	t.deepEqual( skipblanks( tokens ) , ',' ) ;
	t.deepEqual( skipblanks( tokens ) , '3' ) ;
	t.deepEqual( skipblanks( tokens ) , '3' ) ;
	t.deepEqual( skipblanks( tokens ) , '3' ) ;
	t.deepEqual( skipblanks( tokens ) , ',' ) ;
	t.deepEqual( skipblanks( tokens ) , '-' ) ;
	t.deepEqual( skipblanks( tokens ) , '4' ) ;
	t.deepEqual( skipblanks( tokens ) , '4' ) ;
	t.deepEqual( skipblanks( tokens ) , ',' ) ;
	t.deepEqual( skipblanks( tokens ) , '-' ) ;
	t.deepEqual( skipblanks( tokens ) , '5' ) ;
	t.deepEqual( skipblanks( tokens ) , tokens.eof ) ;

} ) ;
