/**
 *@author：ryan
 *@description 防抖
 */

/**
 * 防抖
 * @param { Function } callback 回调函数
 * @param { Number } time 等待时间,默认500ms
 * @param { Boolean } immediate 是否立即执行，默认 false
 * @returns 防抖函数
 */
export function debounce(callback, time, immediate = false) {
  let timer = null;
  let isInvoke = false;    // 是否激活了立即执行

  return (...args) => {
    timer && clearTimeout(timer);

    // 判断是否需要立即执行
    if (immediate && !isInvoke) {
      callback.call(this, args);
      isInvoke = true;     // 已经立即执行, 阻止下次触发的立即执行
    } else {
      // 延迟执行
      timer = setTimeout(() => {
        callback.call(this, args);
        isInvoke = false;  // 将isInvoke初始化
      }, time);
    }
  };
}
