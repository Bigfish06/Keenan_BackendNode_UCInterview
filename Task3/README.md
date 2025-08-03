# Friends episodes API

A backend that fetches, stores and serves data about the Friends TV show episodes using TVMaze API and MongoDB Atlas.

This project lets you:
- Fetch all episodes from TVMaze and store in MongoDB
- Add a brand new episode
- Query episodes by id, season or episode number


## Features

- MongoDB Atlas integration
- Mongoose schema for episode structure
- Script to fetch and seed episodes
- RESTFUL API routes with appropriate status codes
- JSON responses
- Well-structured Postman collection


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



## Usage/Examples

```javascript
//On starting your server with: node app.js


POST http://localhost:5000/api/episode

GET http://localhost:5000/api/episodes

GET http://localhost:5000/api/episodes/40647

GET http://localhost:5000/api/seasons/2/episodes

GET http://localhost:5000/api/seasons/2/episodes/5
```


## Screenshots

![App Screenshot](https://i.ibb.co/k2tK5L3W/Screenshot-78.png)
![App Screenshot](https://i.ibb.co/nNCY6BgT/Screenshot-79.png)
![App Screenshot](https://i.ibb.co/z0PdKmz/Screenshot-80.png)
![App Screenshot](https://i.ibb.co/FqDpQ5Vv/Screenshot-81.png)
![App Screenshot](https://i.ibb.co/zWsTTqFp/Screenshot-82.png)
## Postman Collection
A Postman Collection with the requests is made available.
## Acknowledgements

Credits: [TVMaze API](https://api.tvmaze.com/singlesearch/shows?q=friends), [MongoDB Atlas](https://www.mongodb.com/atlas)
