
# The Complete FRIENDS episodes Backend API

This is a Node.js + Express backend API for logging watched Friends episodes. It allows you to create, retrieve, update, and delete episode entries using MongoDB via Mongoose. Ideal for tracking episodes, reviews, and watch history in a structured way.


## Features

- Fetch and store all *Friends* episodes from a public API
- CRUD operations on individual episodes
- Query episodes by season
- Nested routing for season-based operations
- Proper error handling and status codes
- Modular code structure
- MongoDB integration using Mongoose


## Installation

You must have node.js installed on your device

```bash
# Save the code in a file (e.g., app.js)
  node app.js
```
    
## API Reference

#### Add a new episode

```http
  POST /api/episodes
```


#### Fetch all episodes

```http
  GET /api/episodes  
```

#### Fetch a single episode by id

```http
  GET /api/episodes/:id  
```

#### Fetch all episodes in a season

```http
  GET /api/seasons/:seasonNumber/episodes  
```
#### Fetch episode by season and episode number
```http
  GET /api/seasons/:seasonNumber/episodes/:episodeNumber  
```

#### Update the entire episode object
```http
  PUT /api/episodes/:id
```

#### Update only spcified fields
```http
  PATCH /api/episodes/:id
```

#### Delete an episode
```http
  DELETE /api/episodes/:id  
```

## Usage/Examples

```javascript
//On starting your server with: node app.js


POST http://localhost:5000/api/episode

GET http://localhost:5000/api/episodes

GET http://localhost:5000/api/episodes/40647

GET http://localhost:5000/api/seasons/2/episodes

GET http://localhost:5000/api/seasons/2/episodes/5

PUT http://localhost:5000/api/episodes/10000
//Body
{
        "id": 10000,
        "name": "junior dev ep gets an update"
} 

PATCH http://localhost:5000/api/episodes/10000
//Body
{
        "id":10000,
        "name":"updated junior dev",
        "season": 1,
        "number": 1,
        "airdate": "2025-08-03"
}  

DELETE http://localhost:5000/api/episodes/10000
```


## Screenshots

![App Screenshot](https://i.ibb.co/Y4b64qrw/Screenshot-78.png)


![App Screenshot](https://i.ibb.co/3nZpSmh/Screenshot-79.png)


![App Screenshot](https://i.ibb.co/6RFQ7FL9/Screenshot-80.png)


![App Screenshot](https://i.ibb.co/NdkwSpTy/Screenshot-81.png)


![App Screenshot](https://i.ibb.co/B5LSkswS/Screenshot-82.png)


![App Screenshot](https://i.ibb.co/WpWvz4My/Screenshot-93.png)


![App Screenshot](https://i.ibb.co/WN79RVfn/Screenshot-94.png)


![App Screenshot](https://i.ibb.co/d0v8tzVD/Screenshot-95.png)


## Acknowledgements

Credits: [TVMaze API](https://api.tvmaze.com/singlesearch/shows?q=friends), [MongoDB Atlas](https://www.mongodb.com/atlas)

