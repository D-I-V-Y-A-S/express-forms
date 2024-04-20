const express=require('express')
const router=express.Router()

const {renderData,getFormData}=require("../Controller/formController")
router.get('/',renderData)
router.post('/data',getFormData)

module.exports=router
