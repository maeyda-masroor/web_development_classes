const {readFile , writeFile, read} = require('fs');
console.log('star');
readFile('./first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile('./second.txt','utf-8', (error,res) =>{
        if(error) {throw error};
    
    const second = result
    writeFile(
      './resultAsync.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')