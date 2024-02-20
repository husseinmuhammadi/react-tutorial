const { get, post } = require('./http');

const url = 'http://localhost:8080/api/v1/products';
const id = '97dbfd69-9a0a-4637-be9d-94fd76b74881';


const product = {
  name: "Mouse",
  description: "Mouse description",
}


post(url, product).then(response => {
  if (response.status === 201) {
    return get(response.headers.get('Location'));
  }
}).then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});

// get(`${url}/${id}`).then(data => {
//   console.log(data);
// });

// get(url).then(data => {
//   console.log(data);
// });

// const post = async () => {
//   const rawResponse = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(product)
//   });
//   const content = await rawResponse;

//   console.log(content);
//   // return rawResponse.json();
// };

// post();
