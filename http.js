//import
const http = require('http')

//to create a new http server
const server = http.createServer((req,res) => {
    if(req.url == '/getUser'){
        res.end('Hello World')
    }else if(req.url == '/getBooks'){
        res.end('Hello books')
    }
})

const port = 3000

server.listen(port,() => {
    console.log("Server running at",port)
})


