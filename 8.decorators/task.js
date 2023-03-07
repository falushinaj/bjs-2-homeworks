//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.findIndex((item) => item.hash == hash);
        if (objectInCache !== -1) {
          console.log("Из кэша: " + cache[objectInCache].value);
          return "Из кэша: " + cache[objectInCache].value;
        }
     
        let result = func(...args);
        cache.push({
          'hash': hash,
          'value': result
        });
        if (cache.length > 5) {
          cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
      }
      return wrapper;
}

const addAndMultiply = (a, b, c) => (a + b) * c;
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded(1, 2, 3); // вычисляем: 9
upgraded(1, 2, 3); // из кэша: 9
upgraded(2, 2, 3); // вычисляем: 12
upgraded(3, 2, 3); // вычисляем: 15
upgraded(4, 2, 3); // вычисляем: 18
upgraded(5, 2, 3); // вычисляем: 21
upgraded(6, 2, 3); // вычисляем: 18 (при этом кеш для 1, 2, 3 уничтожается)
upgraded(1, 2, 3); // вычисляем: 9  (снова вычисляем, кеша нет)
