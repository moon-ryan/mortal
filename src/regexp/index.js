/**
 *@author：ryan
 *@description 正则相关
 */

/**
 * 检验手机号
 * @param {String|Number} phone 手机号
 * @returns Boolean 是否是手机号
 */
export function checkPhoneNumber(phone) {
  return new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57]|19[0-9])[0-9]{8}$/).test(phone);
}

/**
 * 检验email
 * @param {String} email email 地址
 * @returns Boolean 是否是email
 */
export function checkEmail(email) {
  return new RegExp(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(email);
}

/**
 * 校验身份证
 * @param {String|Number} IDCard
 * @returns 是否身份证
 */
export function checkIDCard(IDCard) {
  const reg = new RegExp(
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
  );
  return reg.test(IDCard);
}

/**
 * 只能中文
 * @param {String} world
 * @returns
 */
export function checkChinese(world) {
  return new RegExp(/[\u4e00-\u9fa5]/).test(world);
}

/**
 * 只能数字
 * @param {String|Number} world
 * @returns
 */
export function checkNumber(world) {
  return new RegExp(/^\d+$/).test(world);
}

/**
 * 校验英文字母，区分大小写
 * @param {*} world 验证参数
 * @param {*} type 0：小写，1：大写
 * @returns
 */
export function checkLetterByType(world, type = 0) {
  const r = type === 0 ? /^[a-z]+$/ : /^[A-Z]+$/;
  return new RegExp(r).test(world);
}

/**
 * 匹配英文字母，不区分大小写
 * @param {String|Number} world
 * @returns
 */
export function checkLetter(world) {
  return new RegExp(/^[a-z]+$/i).test(world);
}

/**
 * 校验非空，除对象，数组外
 * @param {Any} world
 * @returns
 */
export function checkEmpty(world) {
  return !world;
}
