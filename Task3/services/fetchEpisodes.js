//fetch all the data and save it to our DB
const axios=require('axios')
const Episode=require('../models/episode.model')

const fetchEpisodes=async()=>{
    const showData=await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends')
    const id=showData.data.id
    const episodesData=await axios.get('https://api.tvmaze.com/shows/'+id+'/episodes')

    for(const episode of episodesData.data)
    {
        await Episode.create(episode)
    }
}

module.exports=fetchEpisodes
