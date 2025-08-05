const Episode=require('../models/watched-episode.model')

const createEpisode=async(req,res)=>{
    try {
        const episode=req.body
        episode.watchedAt=new Date()
        await Episode.create(episode)
        res.status(201).json(episode)
    } catch (error) {
        res.status(500).json({data:error.message,message:'Failed to add episode'})
    }   
}

const getEpisodes=async(req,res)=>{
    try {
        const episodeArray=await Episode.find({})
        //find all 
        episodeArray.sort((a,b)=>{
            return b.watchedAt-a.watchedAt
        })
        res.status(200).json(episodeArray)
    } catch (error) {
        res.status(500).json({data:error.message,message:'Failed to fetch episode(s)'})
    }   
}

const updateEpisode=async(req,res)=>{
    try {
        const {episodeNumber}=req.params
        const episode=await Episode.findOneAndUpdate({episodeNumber:episodeNumber},{watchedAt:new Date()},{new:true})
        if(!episode)
        {
            return res.status(404).json('No such episode found')
        }
        //const updatedEpisode=await Episode.findOne({episodeNumber:episodeNumber})
        res.status(200).json(episode)
    } catch (error) {
        res.status(500).json({data:error.message,message:'Failed to update episode'})
    }   
}

const deleteEpisode=async(req,res)=>{
    try {
        const {id}=req.params
        const episode=await Episode.findOneAndDelete({id:id})
        if(!episode)
        {
            return res.status(404).json('No such episode found')
        }
        res.status(200).json('Episode was successfully deleted')
    } catch (error) {
        res.status(500).json({data:error.message,message:'Failed to delete episode'})
    }   
}

module.exports={createEpisode,getEpisodes,updateEpisode,deleteEpisode}