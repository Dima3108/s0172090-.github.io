const http=require('http');
const port=process.env.port||300;
const server=http.createServer((req,res)=>{
    if(String(req.query)!=null){
        console.log(String(req.query));
    }
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hellow world!')
})
server.listen(port,()=>console.log('сервер запущен на порте '+port+
'\nCtrl+C for exit\n'))