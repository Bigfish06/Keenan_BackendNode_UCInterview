const Episode=require('../models/episode.model')

const createEpisode=async(req,res)=>{
    try {
        await Episode.create(req.body)
        //specifically for successful creation, the status code is 201
        res.status(201).json('Episode was successfully added')
    } catch (error) {
        res.status(500).json({data:error.message, message:'Failed to add episode'})
    }
}

const getEpisode=async(req,res)=>{
    try {
        const allEpisodes=await Episode.find({})
        res.status(200).json(allEpisodes)
    } catch (error) {
        res.status(500).json({data:error.message, message:'Failed to display episodes'})
    }
}

const getEpisodeById=async(req,res)=>{
    try {
        const {id}=req.params
        const episode=await Episode.findOne({id: id})
        if(!episode)
        {
            res.status(404).json('No such episode found')
        }
        res.status(200).json(episode)
    } catch (error) {
        res.status(500).json({data:error.message, message:'Failed to fetch this episode'})
    }
}

module.exports={createEpisode,getEpisode,getEpisodeById}