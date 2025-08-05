const express=require('express')
const router=express.Router()

const controllerFunctions=require('../controllers/episode.controller')
const createEpisode=controllerFunctions.createEpisode
const getEpisode=controllerFunctions.getEpisode
const getEpisodeById=controllerFunctions.getEpisodeById
const updateEpisodeEntirely=controllerFunctions.updateEpisodeEntirely
const updateEpisodePartially=controllerFunctions.updateEpisodePartially
const deleteEpisode=controllerFunctions.deleteEpisode

router.post('/',createEpisode)
router.get('/',getEpisode)
router.get('/:id',getEpisodeById)
router.put('/:id',updateEpisodeEntirely)
router.patch('/:id',updateEpisodePartially)
router.delete('/:id',deleteEpisode)

module.exports=router
