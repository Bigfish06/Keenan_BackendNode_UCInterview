
# Friends Episode Logger Backend

This is a Node.js + Express backend API for logging watched Friends episodes. It allows you to create, retrieve, update, and delete episode entries using MongoDB via Mongoose. Ideal for tracking episodes, reviews, and watch history in a structured way.


## Features

- Log a watched episode with title, season, episode number, and review
- Store the time it was watched
- Fetch all watched episodes sorted by most recent
- Update watch timestamp for a given episode
- Delete a watched episode by custom id
- Well-organized Postman collection


## Installation

You must have node.js installed on your device

```bash
# Save the code in a file (e.g., app.js)
  node app.js
```
    
## API Reference

#### Log a new episode

```http
  POST /api/watched-episodes
```


#### Fetch all episodes

```http
  GET /api/watched-episodes
```

#### Update the last watch

```http
  PUT /api/watched-episodes/:episodeNumber
```

#### Remove a logger entry

```http
  DELETE /api/watched-episodes/:id 
```



## Usage/Examples

```javascript
//On starting your server with: node app.js


POST http://localhost:5000/api/watched-episodes/
//Body
{
    "id":10001,
    "name":"Junior dev part 2",
    "season":1,
    "episodeNumber":1,
    "userReview":"Junior Dev completes task5"
}

GET http://localhost:5000/api/watched-episodes

PUT http://localhost:5000/api/watched-episodes/1

DELETE http://localhost:5000/api/watched-episodes/10001
```


## Screenshots

![App Screenshot](https://i.ibb.co/k2tK5L3W/Screenshot-78.png)


![App Screenshot](https://i.ibb.co/mCxzS4Tg/Screenshot-92.png))


![App Screenshot](https://i.ibb.co/6xH4VWD/Screenshot-89.png))


![App Screenshot](https://i.ibb.co/XkztBrBk/Screenshot-87.png)


## Acknowledgements

Credits: [MongoDB Atlas](https://www.mongodb.com/atlas)

