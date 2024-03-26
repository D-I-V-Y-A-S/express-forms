const express=require('express')
const app=express()
const PORT=3500

app.set('view engine','ejs')
app.set('views','./views')

// app.get('/',(request,response)=>
// {
//     // response.status(200).render('index',{name:"Divya"})
//     response.status(200).render('index')    
    
// })

app.get('/',(request,response)=>{
response.status(200).render('index')
})

app.use(express.json())

app.post('/data',(request,response)=>
{
//request.query is used to access data sent via URL parameters.
// respond.status(200).send(request.query.name + request.query.regid)
const addName= request.body.name
   const addRegno = request.body.regid
   console.log(addName+" "+ addRegno)
   response.status(200).send("Data received successfully!")
})

app.listen(PORT,console.log(`Server started running at http://localhost:${PORT}`))

