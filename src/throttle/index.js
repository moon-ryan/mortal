/**
 *@author：ryan
 *@description 节流
 */

/**
 * 节流
 * @param { Function } callback 回调函数
 * @param { Number } time 等待时间 默认500ms
 * @param { Object } options 配置，默认{ leading: false, trailing: true }
 *         leading: false 首次不执行
 *         trailing: true  最后一次执行
 * @returns 节流函数
 */
export function throttle(callback, time = 500, options = { leading: false, trailing: true }) {
  const { leading, trailing } = options;
  let lastTime = 0;
  let timer = null;

  return (...args) => {
    const nowTime = Date.now();
    if (!lastTime && !leading) lastTime = nowTime;
    const remainTime = time - (nowTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      callback.call(this, ...args);
      lastTime = nowTime;
      return;
    }

    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null;
        lastTime = !leading ? 0 : Date.now();
        callback.call(this, ...args);
      }, remainTime);
    }
  };
}
