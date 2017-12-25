import test from 'ava' ;

import * as stream from '@aureooms/js-stream' ;
import * as parse from '../../src' ;

/**
 * @test {parse#integer}
 */
test( 'can parse a single integer' , t => {

	const input = '+92839328£µ' ;
	const tokens = stream.fromiterable( input ) ;
	const n = parse.integer( tokens ) ;
	t.deepEqual( n , 92839328 ) ;
	t.deepEqual( tokens.read( ) , '£' ) ;

} ) ;

/**
 * @test {parse#integer}
 */
test( 'can parse integers' , t => {

	let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let tokens = stream.fromiterable( input ) ;
	tokens = parse.csv( tokens ) ;
	tokens = stream.map( parse.integer , tokens ) ;

	t.deepEqual(stream.toarray( tokens ), [ 1 , 22 , 333 , -44 , -5 ] ) ;

} ) ;
