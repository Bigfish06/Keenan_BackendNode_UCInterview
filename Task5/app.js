//✅ Middleware: Functions that run before the final controller, usually for auth, logging, or validation
//✅ Controller: The final function that handles business logic and sends the response

const express=require('express')
//we import the method exported from express's module, and assign it the name express
const app=express()
//this method, when called, creates an object of express, app is the reference of that object
//app: function + object
//app needs to also be a function bcoz it is used like a function in http.createServer(app)
//express class has methods of put, get, post, etc.


//mongoose is a node.js library that helps you interact with mongodb
//it does the job of translating your js objects and mongodb documents
//Atlas is just the cloud version of mongoDB

const mongoose=require('mongoose')
//we create mongoose object, by importing the module named mongoose
mongoose.connect('mongodb+srv://keenan:kee123@cluster0.afzm1ns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connection to the database was successful')
})
.catch(()=>{
    console.log('Connection to the database failed')
})

//.connect returns a Promise
//a promise is an object from the built-in class Promise
//it just differs bcoz it might have not yet taken its value
//Promise objects have methods like then, catch, finally
//if the connection fails, the promise is rejected and the catch block is executed
//we could use aysnc and await, but here its just more common to use .then and .catch

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})
//this implicitly does the require http and http.createserver

const router=require('./routes/router')
app.use(express.json())
//parses json to jso
/*When you send a JSON request from Postman or frontend:

{
  "id": "abc123",
  "title": "Episode 1"
}

This middleware lets you access it in your controller as:

req.body.id
req.body.title */

app.use(express.urlencoded({extended:false}))
//parses form data to jso

app.use('/api/watched-episodes',router)
//mounts the router on a base path