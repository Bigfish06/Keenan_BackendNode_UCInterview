//axios is a tool used to fetch data from the given api
//for axios, we have to use await and make the function async
//we use try-catch with it, (status code for failure: 500)
const axios=require('axios')

const getShow=async(req,res)=>{   
    try {
        const showData=await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends')
        res.status(200).json(showData.data)
    } catch (error) {
        res.status(500).json({message:'Failed to fetch show details',error:error.message})
    }  
}

module.exports=getShow