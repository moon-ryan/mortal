/**
 *@author：ryan
 *@description 对象相关
 */

/**
 * 校验是否是空对象
 * @param {Object} obj
 * @returns Boolean
 */
export function checkObjectEmpty(obj) {
  return !Object.keys(obj).length;
}
