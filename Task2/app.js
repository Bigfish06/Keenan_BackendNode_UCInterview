const express=require('express')
const app=express()

app.listen(5000,(req,res)=>{
    console.log('server is listening on port 5000')
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//getting both our routers
const showRouter=require('./routes/showRoute')
const episodesRouter=require('./routes/episodeRoute')

app.use('/show-details',showRouter)
app.use('/episodes',episodesRouter)