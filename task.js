const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url == '/getRecipe'){
        res.end("Recipe")
    }else if(req.url = '/getTodo'){
        res.end("Todo")

    }else if(req.url == 'req.url'){
        res.end("Cources")
    }else if(req.url == 'getCources'){
        res.end("Cources")

    }
})

const port = 3000

server.listen(port,() => {
    console.log("Server listening in",port)
})