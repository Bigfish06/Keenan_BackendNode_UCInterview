const mongoose=require('mongoose')
const episodeSchema=new mongoose.Schema(
    //this is the schema definition obj
    {
    //this is a field/path definition
    //there will be a field id in the document
    id:{
        type: Number,
        unique: true,
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

    episodeNumber:{
        type: Number,
        required: true
    },

    userReview:{
        type: String,
        required: true
    } ,
    
    watchedAt:{
        type: Date,
        required:true
    }
},)
//this is schema options object
/*{
    timestamps:true
})*/
//though we pass 2 args objs into the construtor, it returns just one compressed object
//episodeSchema is a new such obj creted of the class Schema
//a schema is a blueprint for the documents we store in our DB

const Episode=mongoose.model("Episode",episodeSchema)
//mongoose.model() is a function that takes args as:
//1. The name of the model (usually singular, like "Episode")
//2. The schema object you created earlier.
//It returns a Model class — which is like a special object tied to a MongoDB collection.
//This model class has the imp methods like create, find, etc.
module.exports=Episode