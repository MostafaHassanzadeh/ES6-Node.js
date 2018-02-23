const 
http = require('http'),
HostName="127.0.0.1",
port=1337;
http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'html'});
  res.end('<h1>Hello World </h1>');
}).listen(port, HostName);
console.log(`Server running at http://${HostName}:${port}/`);
