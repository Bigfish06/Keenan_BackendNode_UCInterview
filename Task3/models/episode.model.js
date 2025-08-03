const mongoose=require('mongoose')
const episodeSchema=mongoose.Schema({
        id:{
            type: Number,
            required: [true,'Please enter the id']
        },

        name:{
            type: String,
            required: true
        },

        season:{
            type: Number,
            required: true
        },

        number:{
            type: Number,
            required: true
        },

        airdate:{
            type: String,
            required: true
        },

        summary:{
            type: String,
            required: true
        },
})

const Episode=mongoose.model("Episode",episodeSchema)
module.exports=Episode