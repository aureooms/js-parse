import 'babel-polyfill' ;
import test from 'ava' ;
import * as parse from '../../src/index.js' ;

/**
 * @test {parse#from}
 * @test {parse#to}
 */
test( 'can read from string' , t => {

	let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let stream = parse.from.string( input ) ;
	t.same(parse.to.string( stream ), input ) ;

} ) ;

/**
 * @test {parse#split}
 */
test( 'can split stream' , t => {

	let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let stream = parse.from.string( input ) ;
	stream = parse.split( stream , ' \t\n' ) ;
	t.same(parse.to.string( stream.read( ) ), '1' ) ;
	t.same(parse.to.string( stream.read( ) ), ',' ) ;
	t.same(parse.to.string( stream.read( ) ), '22' ) ;
	t.same(parse.to.string( stream.read( ) ), ',' ) ;
	t.same(parse.to.string( stream.read( ) ), '333' ) ;
	t.same(parse.to.string( stream.read( ) ), ',' ) ;
	t.same(parse.to.string( stream.read( ) ), '-44' ) ;
	t.same(parse.to.string( stream.read( ) ), ',' ) ;
	t.same(parse.to.string( stream.read( ) ), '-5' ) ;

} ) ;

/**
 * @test {parse#ignore}
 */
test( 'can ignore tokens from stream' , t => {

	let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let stream = parse.from.string( input ) ;
	stream = parse.ignore( stream , ' \t\n' ) ;
	t.same(parse.to.string( stream ), '1,22,333,-44,-5' ) ;

} ) ;

/**
 * @test {parse#csv}
 */
test( 'can parse csv' , t => {

	let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let stream = parse.from.iterable( input ) ;
	stream = parse.csv( stream ) ;
	stream = parse.map( parse.to.string , stream ) ;

	t.same(parse.to.array( stream ),[ '1' , '22' , '333' , '-44' , '-5' ] ) ;

} ) ;

/**
 * @test {parse#tsv}
 */
test( 'can parse tsv' , t => {

	let input = '\n\n\n    1 \t22\n\t 333\t\n-44 \t-5 \t\n  \t' ;
	let stream = parse.from.iterable( input ) ;
	stream = parse.tsv( stream ) ;
	stream = parse.map( parse.to.string , stream ) ;

	t.same(parse.to.array( stream ), [ '1' , '22' , '333' , '-44' , '-5' ] ) ;

} ) ;

/**
 * @test {parse#integer}
 */
test( 'can parse integers' , t => {

	let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
	let stream = parse.from.iterable( input ) ;
	stream = parse.csv( stream ) ;
	stream = parse.map( parse.integer , stream ) ;

	t.same(parse.to.array( stream ), [ 1 , 22 , 333 , -44 , -5 ] ) ;

} ) ;
