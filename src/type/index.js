/**
 *@author：ryan
 *@description 数据类型判断
 */

/**
 * 判断数据类型
 * @param { Any } target 目标数据
 * @returns 对应数据类型的字符串表现形式
 */
export function typeOf(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

// 是否是数字类型
export function isNumber(target) {
  return typeOf(target) === "Number" && !Number.isNaN(target);
}

// 是否是NaN
export function isNaN(target) {
  return typeOf(target) === "Number" && Number.isNaN(target);
}

// 是否是数组类型
export function isArray(target) {
  return typeOf(target) === "Array";
}

// 是否是对象类型
export function isObject(target) {
  return typeOf(target) === "Object";
}

// 是否是字符串类型
export function isString(target) {
  return typeOf(target) === "String";
}

// 是否是布尔类型
export function isBoolean(target) {
  return typeOf(target) === "Boolean";
}

// 是否是 Map 类型
export function isMap(target) {
  return typeOf(target) === "Map";
}

// 是否是 Set 类型
export function isSet(target) {
  return typeOf(target) === "Set";
}

export function isDate(target) {
  return typeOf(target) === "Date";
}
