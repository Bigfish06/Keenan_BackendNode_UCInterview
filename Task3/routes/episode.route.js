const express=require('express')
const router=express.Router()

const controllerFunctions=require('../controllers/episode.controller')
const createEpisode=controllerFunctions.createEpisode
const getEpisode=controllerFunctions.getEpisode
const getEpisodeById=controllerFunctions.getEpisodeById

router.post('/',createEpisode)
router.get('/',getEpisode)
router.get('/:id',getEpisodeById)

module.exports=router