/**
 *@author：ryan
 *@description 数组去重
 */

/**
 * 数组去重
 * @param {Array} array 原数组
 * @returns 去重后的数组
 */
export function arrayDuplicateRemoval(array) {
  return [...new Set(array)];
};

/**
 * 对象数组根据指定的key去重
 * @param {Array} array 原数组
 * @param {String} key 指定的属性去重
 * @returns 去重后的数组
 */
export function objectArrayDuplicateRemoval(array, key) {
  const obj = {};
  if (typeof key === 'string') {
    for (let i = 0, len = array.length; i < len; i++) {
      const item = array[i];
      if (!obj[item[key]]) {
        obj[item[key]] = item[key];
      }
    }
  }
  return Object.values(obj);
}
