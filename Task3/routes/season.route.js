const express=require('express')
//this tells express to include the : from the parent app.js when handling req in this router
const router=express.Router({mergeParams: true})

const controllerFunctions=require('../controllers/season.controller')
const getAllEpBySeason=controllerFunctions.getAllEpBySeason
const getEpBySeasonAndNo=controllerFunctions.getEpBySeasonAndNo

router.get('/',getAllEpBySeason)
router.get('/:episodeNumber',getEpBySeasonAndNo)

module.exports=router
