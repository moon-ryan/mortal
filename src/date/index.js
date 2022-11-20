/**
 *@author：ryan
 *@description 时间处理
 */

import { fillZero } from '../number';
import { isDate, isNaN, isString } from '../type';

const weeks = ["日", "一", "二", "三", "四", "五", "六"];

/**
 * 根据传入参数得到时间对象
 * @param  {...any} time 参数
 * @returns Date 对象
 */
export function getDateByTime(...time) {
  if (isString(time) && isNaN(Date.parse(time))) {
    throw new Error("参数格式不正确，参数可为：\n1、时间戳；\n2、 yyyy-MM-DD hh:mm:ss 格式字符串");
  }
  return time ? new Date(...time) : new Date();
}

/**
 *
 * @param {Date | String | Number} time
 * @returns 时间参数对象
 * {
 *  Y：年,
 *  M：月, // 使用时+1
 *  D：日,
 *  h：时,
 *  m：分,
 *  s：秒,
 *  ms：毫秒,
 *  d：星期中的第几天,
 *  w：星期几
 * }
 */
export function getTimeObject(...time) {
  let date = !time && new Date();
  if (isDate(time)) date = time;
  else date = getDateByTime(...time);

  const Y = date.getFullYear();
  const M = date.getMonth();
  const D = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const ms = date.getMilliseconds();
  const d = date.getDay();
  const w = weeks[d];

  return { Y, M, D, h, m, s, ms, d, w };
}

/**
 * 当月的第一天和最后一天
 * @returns { fristDay：'第一天'，lastDay：'最后一天'}
 */
export function lastDayAndFirstDayByNow() {
  const { Y, M } = getTimeObject();
  const fristDay = getTimeObject(Y, M, 1);
  const lastDay = getTimeObject(Y, M + 1, 0);
  return {
    fristDay: `${fristDay.Y}-${fristDay.M + 1}-${fristDay.D}`,
    lastDay: `${lastDay.Y}-${lastDay.M + 1}-${lastDay.D}`
  };
}

/**
 * 时间格式化：中文格式不包含星期几
 * @param  {...any} time 参数
 * @returns 格式字符串
 */
export function formatDateByChineseNotWeek(...time) {
  const { Y, M, D, h, m, s } = getTimeObject(...time);
  return `${Y}年${M + 1}月${D}日 ${h}时${m}分${s}秒`;
}

/**
 * 时间格式化：中文格式包含星期几
 * @param  {...any} time 参数
 * @returns 格式字符串
 */
export function formatDateByChineseWeek(...time) {
  const { Y, M, D, h, m, s, w } = getTimeObject(...time);
  return `${Y}年${M + 1}月${D}日 ${h}时${m}分${s}秒 星期${w}`;
}

/**
 * 根据指定格式格式化时间
 * @param {String} type 格式，默认：yyyy-MM-DD hh:mm:ss，严格：月：MM，分钟：mm
 * @param  {...any} time 参数
 * @returns 格式化后的字符串
 */
export function formatDateByType(type = 'yyyy-MM-DD hh:mm:ss', ...time) {
  let temp = type;
  if (type && isString(temp)) {
    const { Y, M, D, h, m, s } = getTimeObject(...time);
    temp = temp.replace(/yyyy/ig, Y);
    temp = temp.replace(/MM/, fillZero(M + 1));
    temp = temp.replace(/DD/ig, fillZero(D));
    temp = temp.replace(/hh/ig, fillZero(h));
    temp = temp.replace(/mm/, fillZero(m));
    temp = temp.replace(/ss/ig, fillZero(s));
    temp = temp.replace(/yy/ig, `${Y}`.substring(2));
  }
  return temp;
}
