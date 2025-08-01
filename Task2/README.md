
# Friends API Backend

A backend that fetches and returns show-details and using so, fetches details of all episodes about the TV show Friends from TVMaze API. It uses Axios to fetch data and follows MVC architecture.


## Features

- Responds to two requests(/show-details & /episodes)
- Perfectly organized JSON response
- Status codes
- Follows MVC architecture
- Well-organized Postman Collection


## Installation

You must have node.js installed on your device

```bash
# Save the code in a file (e.g., app.js)
  node app.js
```
    
## Usage/Examples

```javascript
//On starting your server with: node app.js

//show-details
GET http://localhost:5000/show-details

//episodes
GET http://localhost:5000/episodes
```


## API Reference

#### Get show-details

```http
  GET /show-details
```


#### Get episodes

```http
  GET /episodes
```



## Screenshots

![App Screenshot](https://i.ibb.co/x88T3vTV/Screenshot-73.png)
![App Screenshot](https://i.ibb.co/GyRfvSZ/Screenshot-75.png)
![App Screenshot](https://i.ibb.co/ksQQLst7/Screenshot-76.png)


## Postman Collection
A Postman Collection with the requests is made available.
## Acknowledgements

Credits: [TVMaze API](https://api.tvmaze.com/singlesearch/shows?q=friends)

