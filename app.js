const express=require('express')
const app=express()
const PORT=3500
app.set('view engine','ejs')
app.get('/',(request,response)=>
{
    // response.status(200).render('index',{name:"Divya"})
    response.status(200).render('index')    
    
})
app.listen(PORT,console.log(`Server started running at http://localhost:${PORT}`))

