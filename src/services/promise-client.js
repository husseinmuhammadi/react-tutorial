const { process } = require('./promise');

process(1000, 2000).then((data) => {
  console.log(data);  
  // return process(null, new Error('Something went wrong'));  
  return process(2000, null);
}).then(data => {
  console.log(data);  
}).then(
  () => console.log('Done!')
).catch((err) => {
  console.error("Error:", err.message);
});
