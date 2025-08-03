const Episode=require('../models/episode.model')

const getAllEpBySeason=async(req,res)=>{
    try {
        const {seasonNumber}=req.params
        const episodes=await Episode.find({season: seasonNumber})
        //find returns an array so as array can't be null, we check its length
        if(episodes.length===0)
        {
            return res.status(404).json('Invalid season number')
        }
        res.status(200).json(episodes)
    } catch (error) {
        res.status(500).json({data:error.message,message:'Failed to find episodes for this season'})
    }
}

const getEpBySeasonAndNo=async(req,res)=>{
    try {
        //mongo internally typescasts the string of params to Number
        const {seasonNumber,episodeNumber}=req.params
        const episode=await Episode.findOne({season: seasonNumber,number: episodeNumber})
        if(!episode)
        {
            return res.status(404).json('Invalid season/episode number')
        }
        res.status(200).json(episode)
    } catch (error) {
        res.status(500).json({data:error.message,message:'Failed to find such episode'})
    }
}

module.exports={getAllEpBySeason,getEpBySeasonAndNo}