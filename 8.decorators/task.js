//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    const idx = cache.findIndex((item) => hash === item.hash);

    if (idx !== -1) {
      console.log("Из кеша: " + cache[idx].value);
      return "Из кеша: " + cache[idx].value;
    }

    let result = func(...args);
    cache.push({hash: hash, value: result});
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;

  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
 
  function wrapper(...args) {

    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);

    wrapper.allCount++;
  }

  wrapper.allCount = 0;
  wrapper.count = 0;
  return wrapper;
}
