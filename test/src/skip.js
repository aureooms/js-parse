import test from 'ava' ;

import { fromstring , skipblanks } from '../../src' ;

/**
 * @test {parse#fromstring}
 * @test {parse#skipblanks}
 */
test( 'can read from string' , t => {

	const input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	const stream = fromstring( input ) ;
	t.deepEqual( skipblanks( stream ) , '1' ) ;
	t.deepEqual( skipblanks( stream ) , ',' ) ;
	t.deepEqual( skipblanks( stream ) , '2' ) ;
	t.deepEqual( skipblanks( stream ) , '2' ) ;
	t.deepEqual( skipblanks( stream ) , ',' ) ;
	t.deepEqual( skipblanks( stream ) , '3' ) ;
	t.deepEqual( skipblanks( stream ) , '3' ) ;
	t.deepEqual( skipblanks( stream ) , '3' ) ;
	t.deepEqual( skipblanks( stream ) , ',' ) ;
	t.deepEqual( skipblanks( stream ) , '-' ) ;
	t.deepEqual( skipblanks( stream ) , '4' ) ;
	t.deepEqual( skipblanks( stream ) , '4' ) ;
	t.deepEqual( skipblanks( stream ) , ',' ) ;
	t.deepEqual( skipblanks( stream ) , '-' ) ;
	t.deepEqual( skipblanks( stream ) , '5' ) ;
	t.deepEqual( skipblanks( stream ) , null ) ;

} ) ;
