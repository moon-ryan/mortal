/**
 *@author：ryan
 *@description 引入各模块函数
 */
import * as debounce from "./debounce";
import * as throttle from "./throttle";
import * as array from "./array";
import * as isType from "./type";
import * as date from "./date";
import * as number from "./number";
import * as object from "./object";
import * as regexp from "./regexp";

export default {
  ...debounce,
  ...throttle,
  ...array,
  ...isType,
  ...date,
  ...number,
  ...object,
  ...regexp
};
