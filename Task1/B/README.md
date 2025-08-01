
# Friends episodes ranking API

A backend that ranks Friends episodes by their popularity. It provides the top N episodes sorted by:

    1. Average rating (descending)
    2. Season (ascending)
    3. Episode number (ascending)


## Features

- Sorts episodes based on popularity with tiebreakers
- Gracefully fetches the top 'N' episodes
- Works for both integer and string input
- Handles invalid inputs


## Installation

You must have node.js installed on your device

```bash
# Save the code in a file (e.g., app.js)
  node app.js
```
    
## Usage/Examples

```javascript
# import the function
const findTopN=require('./app')

console.log(findTopN(3))
//returns the top 3 episodes

console.log(findTopN("4"))
//returns the top 4 episodes

console.log(findTopN(8))
//Please enter N from 1 to 4
```


## Screenshots

![App Screenshot](https://i.ibb.co/sp3p4VSt/Screenshot-77.png)
