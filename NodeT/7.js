const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.end('welcome to our home page');
    }
    else if(req.url === '/about') {
        res.end('this is about page')
    }
    else{
        res.end('ccc');
    }
})
server.listen(3000);