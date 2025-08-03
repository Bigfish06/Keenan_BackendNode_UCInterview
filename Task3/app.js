const express=require('express')
const app=express()

const mongoose=require('mongoose')
const Episode=require('./models/episode.model')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoose.connect('mongodb+srv://keenanmenezes2006:kee123@cluster0.klljzrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connection to the database was successful')
})
.catch(()=>{
    console.log('Connection to the database failed')
})

//fetch and store to db, before starting our server
const fetchEpisodes=require('./services/fetchEpisodes')
const Product = require('../task3trial/models/product.model')

const start=async()=>{
    try {
        await fetchEpisodes()
        console.log('Successfully fetched episodes and stored it in our database')
    } catch (error) {
        console.log({data:error.message, message:'Failed to fetch and store episodes'})
    }
}
start()

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})

const episodeRouter=require('./routes/episode.route')
app.use('/api/episodes',episodeRouter)

const seasonRouter=require('./routes/season.route')
app.use('/api/seasons/:seasonNumber/episodes',seasonRouter)