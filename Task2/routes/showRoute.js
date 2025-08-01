const express=require('express')
const router=express.Router()

const getShow=require('../controllers/showController')
router.get('/',getShow)

module.exports=router