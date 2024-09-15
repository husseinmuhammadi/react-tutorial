const http = require('http');

const accounts = [
  {
    id: 1,
    username: "hmohammadi",
    enable: true
  },
  {
    id: 2,
    username: "somebody else",
    enable: true
  },
  {
    id: 3,
    username: "somebody else 2",
    enable: false
  }
]

const server = http.createServer((req, res) => {
  res.end(JSON.stringify(accounts));
});

server.listen(8000, () => {
  console.log('Server is running ...');
})