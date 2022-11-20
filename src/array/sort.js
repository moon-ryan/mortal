/**
 *@author：ryan
 *@description 数组排序
 */

/**
 * 普通数组排序
 * @param {Array} array 待排序数组
 * @param {String} type 排序方式，降序：des 升序：asc（默认）
 */
export function sort(array, type = 'asc') {
  array.sort((a, b) => type === 'asc' ? a - b : b - a);
}

/**
 * 对象数组根据指定key排序
 * @param {Array} array 待排序对象数组
 * @param {String} key 指定排序的key
 * @param {String} type 排序方式，降序：des 升序：asc（默认）
 */
export function sortByKey(array, key, type = 'asc') {
  const sort = function (key) {
    return (a, b) => type === 'asc' ? a[key] - b[key] : b[key] - a[key];
  };
  array.sort(sort(key));
}
