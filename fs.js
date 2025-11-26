const fs = require('fs')

// fs.writeFile('sample.txt',"This is my file",(err) => {
//     if(err) throw err
// })

// fs.rename('sample.txt','renamed.txt',(err) =>{
//     if(err) throw err
// })

// fs.appendFile('renamed.txt','This is the added data',(err) =>{
//     if(err) throw err
// })

// fs.readFile('renamed.txt','utf-8',(err,data) =>{
//     console.log(data)
// })

fs.unlink('renamed.txt',(err) => {
    console.log(err)
})