const mongoose=require('mongoose')
const episodeSchema=mongoose.Schema({
        id:{
            type: Number,
            unique: true,
            required: [true,'Please enter the id']
        },

        name:{
            type: String,
        },

        season:{
            type: Number,
        },

        number:{
            type: Number,
        },

        airdate:{
            type: String,
        },

        summary:{
            type: String,
        },
})

const Episode=mongoose.model("Episode",episodeSchema)
module.exports=Episode
