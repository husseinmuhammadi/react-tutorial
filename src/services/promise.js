// This file contains the promise based implementation of the process function

const invoke = (fn, ...args) => new Promise((resolve, reject) => {
  fn(...args, (err, data) => {
    if (err) {
      return reject(err);
    }
    resolve(data);
  });
});

/**
 * 
 * @returns Promise 
 */
const process = (data, error) => invoke((callback) => {
  console.log('Processing...');
  setTimeout(() => {
    callback(error, data);
  }, 1000);
});

process(1000, new Error("data is not valid!")).then((data) => {
  console.log(data);
}).catch((err) => {
  console.error("Error:", err.message);
});

module.exports = {
  process
};
