function promisify(func) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      const callback = (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      };
      // Call the original function with args and the callback as the last argument
      func.apply(this, [...args, callback]);
    });
  };
}
