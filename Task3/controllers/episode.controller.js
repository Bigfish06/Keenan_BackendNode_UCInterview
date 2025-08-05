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
            return res.status(404).json('No such episode found')
        }
        res.status(200).json(episode)
    } catch (error) {
        res.status(500).json({data:error.message, message:'Failed to fetch this episode'})
    }
}

const updateEpisodeEntirely=async(req,res)=>{
    try {
        const {id}=req.params
        let updatedEpisode=req.body
        updatedEpisode.id=id
        const episode=await Episode.findOneAndReplace({id:id},updatedEpisode,{new:true})
        if(!episode)
        {
            return res.status(404).json('No such episode found')
        }        
        res.status(200).json(episode)
    } catch (error) {
        res.status(500).json({data:error.message, message:'Failed to update this episode'})
    }
}

const updateEpisodePartially=async(req,res)=>{
    try {
        const {id}=req.params
        const episode=await Episode.findOneAndUpdate({id:id},req.body,{new:true})
        if(!episode)
        {
            return res.status(404).json('No such episode found')
        }
        res.status(200).json(episode)
    } catch (error) {
        res.status(500).json({data:error.message, message:'Failed to update this episode'})
    }
}

const deleteEpisode=async(req,res)=>{
    try {
        const {id}=req.params
        const deletionObj=await Episode.deleteMany({id:id})
        //self-explanatory
        if(deletionObj.deletedCount==0)
        {
            return res.status(404).json('No such episode found')
        }
        res.status(200).json('Episode was deleted successfully')
    } catch (error) {
        res.status(500).json({data:error.message, message:'Failed to delete this episode'})
    }
}

module.exports={createEpisode,getEpisode,getEpisodeById,updateEpisodeEntirely,updateEpisodePartially,deleteEpisode}
