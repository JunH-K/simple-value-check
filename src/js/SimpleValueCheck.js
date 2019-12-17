class SimpleValueCheck {
  /**
   * 객체인가?
   * @param obj
   * @returns {boolean}
   */
  static isObject(obj) {
    return obj !== null && typeof obj === 'object' && obj.constructor === Object
  }

  /**
   * 함수 인가?
   * @param func
   */
  static isFunction(func) {
    return typeof func === "function";
  }

  /**
   * 연산가능한 숫자인가?
   * @param num
   * @returns {boolean}
   */
  static isNumber(num) {
    return !isNaN( num ) && typeof num === "number";
  }

  /**
   * 문자열인가?
   * @param str
   * @returns {boolean}
   */
  static isString(str) {
    return typeof str === "string";
  }

  static isBoolean(value) {
    return typeof value === "boolean";
  }

  /**
   * 배열인가?
   * @param arr
   * @returns {arg is Array<any>}
   */
  static isArray(arr) {
    return Array.isArray( arr );
  }

  /**
   * property가 있는 객체인가?
   * @param obj
   * @returns {boolean}
   */
  static isHasOwnProp(obj) {
    if ( SimpleValueCheck.isObject( obj ) ){
      for ( let key in obj ) {
        if ( obj.hasOwnProperty( key ) ){
          return true;
        }
      }
    }
    return false;
  }

  static isExist(value) {
    return value !== null && value !== undefined;
  }

  /**
   * 빈 문자열이 아닌가?
   * @param str
   * @returns {*|boolean}
   */
  static isNotEmptyString(str) {
    return SimpleValueCheck.isString( str ) && !!str;
  }

  /**
   * 요소가 있는 배열인가?
   * @param arr
   * @returns {arg is Array<any> | boolean}
   */
  static isNotEmptyArray(arr) {
    return Array.isArray( arr ) && !!arr.length;
  }

  /**
   * null , undefined 가 아닌값이 있는가?
   * @param value
   * @returns {boolean}
   */

  static isUndefined(value) {
    return value === undefined;
  }

  static isNull(value) {
    return value === null;
  }
}

export default SimpleValueCheck;
