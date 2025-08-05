const express=require('express')
const router=express.Router()
//we use router to create separate route handlers in separate files

const {createEpisode,getEpisodes,updateEpisode,deleteEpisode}=require('../controllers/controller')
router.post('/',createEpisode)
router.get('/',getEpisodes)
router.put('/:episodeNumber',updateEpisode)
router.delete('/:id',deleteEpisode)

module.exports=router