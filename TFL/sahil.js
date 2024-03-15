//import library
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>goodmorning</h1>');
});
server.listen(7000, () => {
  console.log(`Server running at 7000`);
});ubuntu@ip-172-31-34-53:~/tfliot$ cat server.js