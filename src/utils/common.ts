
/**
 * Method to prevent repeated execution of a particular function within a certain time range
 * E.G: prevent multiple API calls if use click on search button multiple time
 * 
 * @param {Function} fn function that needs to be throttled 
 * @param {number} wait time it should wait before call
 * @returns void
 */

export const throttle = (fn: any, wait: number = 300) => {
  let inThrottle: boolean,
    lastFn: ReturnType<typeof setTimeout>,
    lastTime: number;
  return function (this: any) {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
