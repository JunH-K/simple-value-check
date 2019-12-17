import vk from './index';

console.log( vk.isObject({}) );
console.log( vk.isFunction(()=>{}) );
console.log( vk.isNumber(1) );
console.log( vk.isString("1") );
console.log( vk.isBoolean(true) );
console.log( vk.isNull(null) );
console.log( vk.isArray([]) );
console.log( vk.isHasOwnProp({a:1}) );
console.log( vk.isNotEmptyString("1"));
console.log( vk.isNotEmptyArray([1]) );
console.log( vk.isExist(2) );
console.log( vk.isUndefined(undefined) );

