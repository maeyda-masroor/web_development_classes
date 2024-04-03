var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    const fileStream = fs.createReadStream('./big.txt','utf-8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('erroor',(err)=>{
        res.end(err);
    })
}).listen(3000)