const express=require('express')
const app=express()
const PORT=3500

app.set('view engine','ejs')

// app.get('/',(request,response)=>
// {
//     // response.status(200).render('index',{name:"Divya"})
//     // response.status(200).render('index')    
    
// })

const formDetail=require("./Router/formRouter")
app.use(express.json())
app.use('/api/v1',formDetail)

app.listen(PORT,console.log(`Server started running at http://localhost:${PORT}`))

