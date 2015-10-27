import 'should' ;
import * as parse from '../../index.js' ;

/** @test {parse} */
describe( 'parse:' , ( ) => {

	/**
	 * @test {parse#from}
	 * @test {parse#to}
	 */
	it( 'can read from string' , ( ) => {

		let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
		let stream = parse.from.string( input ) ;
		parse.to.string( stream ).should.be.eql( input ) ;

	} ) ;

	/**
	 * @test {parse#split}
	 */
	it( 'can split stream' , ( ) => {

		let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
		let stream = parse.from.string( input ) ;
		stream = parse.split( stream , ' \t\n' ) ;
		parse.to.string( stream.read( ) ).should.be.eql( '1' ) ;
		parse.to.string( stream.read( ) ).should.be.eql( ',' ) ;
		parse.to.string( stream.read( ) ).should.be.eql( '22' ) ;
		parse.to.string( stream.read( ) ).should.be.eql( ',' ) ;
		parse.to.string( stream.read( ) ).should.be.eql( '333' ) ;
		parse.to.string( stream.read( ) ).should.be.eql( ',' ) ;
		parse.to.string( stream.read( ) ).should.be.eql( '-44' ) ;
		parse.to.string( stream.read( ) ).should.be.eql( ',' ) ;
		parse.to.string( stream.read( ) ).should.be.eql( '-5' ) ;

	} ) ;

	/**
	 * @test {parse#ignore}
	 */
	it( 'can ignore tokens from stream' , ( ) => {

		let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
		let stream = parse.from.string( input ) ;
		stream = parse.ignore( stream , ' \t\n' ) ;
		parse.to.string( stream ).should.be.eql( '1,22,333,-44,-5' ) ;

	} ) ;

	/**
	 * @test {parse#csv}
	 */
	it( 'can parse csv' , ( ) => {

		let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
		let stream = parse.from.iterable( input ) ;
		stream = parse.csv( stream ) ;
		stream = parse.map( parse.to.string , stream ) ;

		parse.to.array( stream ).should.be.eql( [ '1' , '22' , '333' , '-44' , '-5' ] ) ;

	} ) ;

	/**
	 * @test {parse#tsv}
	 */
	it( 'can parse tsv' , ( ) => {

		let input = '\n\n\n    1 \t22\n\t 333\t\n-44 \t-5 \t\n  \t' ;
		let stream = parse.from.iterable( input ) ;
		stream = parse.tsv( stream ) ;
		stream = parse.map( parse.to.string , stream ) ;

		parse.to.array( stream ).should.be.eql( [ '1' , '22' , '333' , '-44' , '-5' ] ) ;

	} ) ;

	/**
	 * @test {parse#integer}
	 */
	it( 'can parse integers' , ( ) => {

		let input = '\n\n\n    1 ,\t22\n, 333\t,\n-44 ,\t-5 \t\n  \t' ;
		let stream = parse.from.iterable( input ) ;
		stream = parse.csv( stream ) ;
		stream = parse.map( parse.integer , stream ) ;

		parse.to.array( stream ).should.be.eql( [ 1 , 22 , 333 , -44 , -5 ] ) ;

	} ) ;

} ) ;
