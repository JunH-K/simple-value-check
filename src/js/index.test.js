import vk from './index'

test( '객체인가?', () => {
  expect(vk.isObject( {} ) ).toBe( true );
  expect(vk.isObject( { a: 1 } ) ).toBe( true );
  expect(vk.isObject( [] ) ).toBe( false );
  expect(vk.isObject( "" ) ).toBe( false );
  expect(vk.isObject( undefined ) ).toBe( false );
  expect(vk.isObject( null ) ).toBe( false );
  expect(vk.isObject( 1 ) ).toBe( false );
  expect(vk.isObject( function(){} ) ).toBe( false );
  expect(vk.isObject( ()=>{} ) ).toBe( false );
  expect(vk.isObject( 0 ) ).toBe( false );
  expect(vk.isObject( 1 ) ).toBe( false );
  expect(vk.isObject( 0.1 ) ).toBe( false );
  expect(vk.isObject( NaN ) ).toBe( false );
  expect(vk.isObject( 'a' ) ).toBe( false );
  expect(vk.isObject( '' ) ).toBe( false );
} );

test( '속성이 있는 객체인지 확인', () => {
  expect( vk.isHasOwnProp( { a: 1 } ) ).toBe( true );
  expect( vk.isHasOwnProp( [ 1 ] ) ).toBe( false );
  expect( vk.isHasOwnProp( {} ) ).toBe( false );
  expect( vk.isHasOwnProp( [] ) ).toBe( false );
  expect( vk.isHasOwnProp( "" ) ).toBe( false );
  expect( vk.isHasOwnProp( undefined ) ).toBe( false );
  expect( vk.isHasOwnProp( null ) ).toBe( false );
  expect( vk.isHasOwnProp( 1 ) ).toBe( false );
  expect( vk.isHasOwnProp( function(){} ) ).toBe( false );
  expect( vk.isHasOwnProp( function (a){} ) ).toBe( false );
  expect( vk.isHasOwnProp( ()=>{} ) ).toBe( false );
  expect( vk.isHasOwnProp( 0 ) ).toBe( false );
  expect( vk.isHasOwnProp( 1 ) ).toBe( false );
  expect( vk.isHasOwnProp( 0.1 ) ).toBe( false );
  expect( vk.isHasOwnProp( NaN ) ).toBe( false );
  expect( vk.isHasOwnProp( 'a' ) ).toBe( false );
  expect( vk.isHasOwnProp( '' ) ).toBe( false );
} );

test( '배열인지 확인', () => {
  expect( vk.isArray( [ 1 ] ) ).toBe( true );
  expect( vk.isArray( [] ) ).toBe( true );
  expect( vk.isArray( { a: 1 } ) ).toBe( false );
  expect( vk.isArray( {} ) ).toBe( false );
  expect( vk.isArray( "" ) ).toBe( false );
  expect( vk.isArray( undefined ) ).toBe( false );
  expect( vk.isArray( null ) ).toBe( false );
  expect( vk.isArray( 1 ) ).toBe( false );
  expect( vk.isArray( 'a' ) ).toBe( false );
  expect( vk.isArray( 0 ) ).toBe( false );
  expect( vk.isArray( 1 ) ).toBe( false );
  expect( vk.isArray( 0.1 ) ).toBe( false );
  expect( vk.isArray( NaN ) ).toBe( false );
  expect( vk.isArray( 'a' ) ).toBe( false );
  expect( vk.isArray( '' ) ).toBe( false );
} );

test( '빈 배열인지 확인', () => {
  expect( vk.isNotEmptyArray( [ 1 ] ) ).toBe( true );
  expect( vk.isNotEmptyArray( { a: 1 } ) ).toBe( false );
  expect( vk.isNotEmptyArray( {} ) ).toBe( false );
  expect( vk.isNotEmptyArray( [] ) ).toBe( false );
  expect( vk.isNotEmptyArray( "" ) ).toBe( false );
  expect( vk.isNotEmptyArray( undefined ) ).toBe( false );
  expect( vk.isNotEmptyArray( null ) ).toBe( false );
  expect( vk.isNotEmptyArray( 1 ) ).toBe( false );
  expect( vk.isNotEmptyArray( 'a' ) ).toBe( false );
  expect( vk.isNotEmptyArray( 0 ) ).toBe( false );
  expect( vk.isNotEmptyArray( 1 ) ).toBe( false );
  expect( vk.isNotEmptyArray( 0.1 ) ).toBe( false );
  expect( vk.isNotEmptyArray( NaN ) ).toBe( false );
  expect( vk.isNotEmptyArray( 'a' ) ).toBe( false );
  expect( vk.isNotEmptyArray( '' ) ).toBe( false );
} );

test( '문자열인지 확인', () => {
  expect( vk.isString( 'a' ) ).toBe( true );
  expect( vk.isString( '' ) ).toBe( true );
  expect( vk.isString( [ 1 ] ) ).toBe( false );
  expect( vk.isString( { a: 1 } ) ).toBe( false );
  expect( vk.isString( {} ) ).toBe( false );
  expect( vk.isString( [] ) ).toBe( false );
  expect( vk.isString( undefined ) ).toBe( false );
  expect( vk.isString( null ) ).toBe( false );
  expect( vk.isString( 1 ) ).toBe( false );
  expect( vk.isString( 0 ) ).toBe( false );
  expect( vk.isString( 1 ) ).toBe( false );
  expect( vk.isString( 0.1 ) ).toBe( false );
  expect( vk.isString( NaN ) ).toBe( false );
} );

test( '빈 문자열인지 확인', () => {
  expect( vk.isNotEmptyString( 'a' ) ).toBe( true );
  expect( vk.isNotEmptyString( '' ) ).toBe( false );
  expect( vk.isNotEmptyString( [ 1 ] ) ).toBe( false );
  expect( vk.isNotEmptyString( { a: 1 } ) ).toBe( false );
  expect( vk.isNotEmptyString( {} ) ).toBe( false );
  expect( vk.isNotEmptyString( [] ) ).toBe( false );
  expect( vk.isNotEmptyString( undefined ) ).toBe( false );
  expect( vk.isNotEmptyString( null ) ).toBe( false );
  expect( vk.isNotEmptyString( 1 ) ).toBe( false );
  expect( vk.isNotEmptyString( 0 ) ).toBe( false );
  expect( vk.isNotEmptyString( 1 ) ).toBe( false );
  expect( vk.isNotEmptyString( 0.1 ) ).toBe( false );
  expect( vk.isNotEmptyString( NaN ) ).toBe( false );
} );

test( 'value 가 null, undefined가 아닌값인지 확인', () => {
  expect( vk.isExist( 'a' ) ).toBe( true );
  expect( vk.isExist( '' ) ).toBe( true );
  expect( vk.isExist( [ 1 ] ) ).toBe( true );
  expect( vk.isExist( { a: 1 } ) ).toBe( true );
  expect( vk.isExist( {} ) ).toBe( true );
  expect( vk.isExist( [] ) ).toBe( true );
  expect( vk.isExist( 1 ) ).toBe( true );
  expect( vk.isExist( 0 ) ).toBe( true );
  expect( vk.isExist( 0.1 ) ).toBe( true );
  expect( vk.isExist( 'a' ) ).toBe( true );
  expect( vk.isExist( '' ) ).toBe( true );
  expect( vk.isExist( NaN ) ).toBe( true );
  expect( vk.isExist( undefined ) ).toBe( false );
  expect( vk.isExist( null ) ).toBe( false );
} );

test( '함수인가?', () => {
  expect( vk.isFunction( function(){} ) ).toBe( true );
  expect( vk.isFunction( ()=>{} ) ).toBe( true );
  expect( vk.isFunction( 'a' ) ).toBe( false );
  expect( vk.isFunction( '' ) ).toBe( false );
  expect( vk.isFunction( [ 1 ] ) ).toBe( false );
  expect( vk.isFunction( { a: 1 } ) ).toBe( false );
  expect( vk.isFunction( {} ) ).toBe( false );
  expect( vk.isFunction( [] ) ).toBe( false );
  expect( vk.isFunction( 1 ) ).toBe( false );
  expect( vk.isFunction( undefined ) ).toBe( false );
  expect( vk.isFunction( null ) ).toBe( false );
  expect( vk.isFunction( 0 ) ).toBe( false );
  expect( vk.isFunction( 1 ) ).toBe( false );
  expect( vk.isFunction( 0.1 ) ).toBe( false );
  expect( vk.isFunction( NaN ) ).toBe( false );
  expect( vk.isFunction( 'a' ) ).toBe( false );
  expect( vk.isFunction( '' ) ).toBe( false );
} );

test( '숫자인가?', () => {
  expect( vk.isNumber( 0 ) ).toBe( true );
  expect( vk.isNumber( 1 ) ).toBe( true );
  expect( vk.isNumber( 0.1 ) ).toBe( true );
  expect( vk.isNumber( NaN ) ).toBe( false );
  expect( vk.isNumber( function(){} ) ).toBe( false );
  expect( vk.isNumber( ()=>{} ) ).toBe( false );
  expect( vk.isNumber( 'a' ) ).toBe( false );
  expect( vk.isNumber( '' ) ).toBe( false );
  expect( vk.isNumber( [ 1 ] ) ).toBe( false );
  expect( vk.isNumber( { a: 1 } ) ).toBe( false );
  expect( vk.isNumber( {} ) ).toBe( false );
  expect( vk.isNumber( [] ) ).toBe( false );
  expect( vk.isNumber( undefined ) ).toBe( false );
  expect( vk.isNumber( null ) ).toBe( false );

} );

test( 'Boolean 인가?', () => {
  expect( vk.isBoolean( false ) ).toBe( true );
  expect( vk.isBoolean( true ) ).toBe( true );
  expect( vk.isBoolean( new Boolean() ) ).toBe( false );
  expect( vk.isBoolean( 0 ) ).toBe( false );
  expect( vk.isBoolean( 1 ) ).toBe( false );
  expect( vk.isBoolean( 0.1 ) ).toBe( false );
  expect( vk.isBoolean( NaN ) ).toBe( false );
  expect( vk.isBoolean( function(){} ) ).toBe( false );
  expect( vk.isBoolean( ()=>{} ) ).toBe( false );
  expect( vk.isBoolean( 'a' ) ).toBe( false );
  expect( vk.isBoolean( '' ) ).toBe( false );
  expect( vk.isBoolean( [ 1 ] ) ).toBe( false );
  expect( vk.isBoolean( { a: 1 } ) ).toBe( false );
  expect( vk.isBoolean( {} ) ).toBe( false );
  expect( vk.isBoolean( [] ) ).toBe( false );
  expect( vk.isBoolean( undefined ) ).toBe( false );
  expect( vk.isBoolean( null ) ).toBe( false );

} );

test( 'null 인가?', () => {
  expect( vk.isNull( null ) ).toBe( true );
  expect( vk.isNull( 0 ) ).toBe( false );
  expect( vk.isNull( 1 ) ).toBe( false );
  expect( vk.isNull( 0.1 ) ).toBe( false );
  expect( vk.isNull( NaN ) ).toBe( false )
  expect(vk.isNull( function(){} ) ).toBe( false );
  expect(vk.isNull( ()=>{} ) ).toBe( false );
  expect( vk.isNull( 'a' ) ).toBe( false );
  expect( vk.isNull( '' ) ).toBe( false );
  expect( vk.isNull( [ 1 ] ) ).toBe( false );
  expect( vk.isNull( { a: 1 } ) ).toBe( false );
  expect( vk.isNull( {} ) ).toBe( false );
  expect( vk.isNull( [] ) ).toBe( false );
  expect( vk.isNull( undefined ) ).toBe( false );
} );

test( 'undefined 인가?', () => {
  var value;
  expect( vk.isUndefined( value ) ).toBe( true );
  expect( vk.isUndefined( undefined ) ).toBe( true );
  expect( vk.isUndefined( 0 ) ).toBe( false );
  expect( vk.isUndefined( 1 ) ).toBe( false );
  expect( vk.isUndefined( 0.1 ) ).toBe( false );
  expect( vk.isUndefined( NaN ) ).toBe( false );
  expect( vk.isUndefined( function(){} ) ).toBe( false );
  expect( vk.isUndefined( ()=>{} ) ).toBe( false );
  expect( vk.isUndefined( 'a' ) ).toBe( false );
  expect( vk.isUndefined( '' ) ).toBe( false );
  expect( vk.isUndefined( [ 1 ] ) ).toBe( false );
  expect( vk.isUndefined( { a: 1 } ) ).toBe( false );
  expect( vk.isUndefined( {} ) ).toBe( false );
  expect( vk.isUndefined( [] ) ).toBe( false );
  expect( vk.isUndefined( null ) ).toBe( false );
} );
