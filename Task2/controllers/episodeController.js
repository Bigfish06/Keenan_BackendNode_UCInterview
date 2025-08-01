const axios=require('axios')

const getEpisode=async(req,res)=>{   
    try {
        const showData=await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends')
        const id=showData.data.id
        const episodesData=await axios.get('https://api.tvmaze.com/shows/'+id+'/episodes')

        res.status(200).json(episodesData.data)
    } catch (error) {
        res.status(500).json({message:'Failed to show episodes',error:error.message})
    }    
}

module.exports=getEpisode