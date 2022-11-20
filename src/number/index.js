/**
 *@author：ryan
 *@description 数字处理
 */

import * as isType from '../type';
const { isNumber } = isType;

/**
 * 个位数字补零操作
 * @param {Number} num 参数
 * @returns 两位数字的字符串
 */
export function fillZero(num) {
  if (!isNumber(num)) throw new Error('参数补零操作必须是数字');
  return num < 10 ? `0${num}` : num;
}
