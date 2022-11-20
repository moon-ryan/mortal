/**
 *@author：ryan
 *@description 数组判断
 */

/**
 * 检验数组是否为空数组,
 * @param {*} arr 待检验数组
 * @returns boolean
 */
export function checkArrayEmpty(arr) {
  return Array.isArray(arr) && !arr.length;
}
