export const delay = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout))

/**
 * 函数防抖 闭包存储上一个计时器id，对返回值函数多次调用会清除上一次的计时器  
 * 从而对于间隔时间过短的调用取消执行
 */
export const debounce = (fn: () => any, timeout: number) => {
  let timmer: any;
  return () => {
    timmer ? clearTimeout(timmer) : null
    timmer = setTimeout(fn, timeout);
  }
}