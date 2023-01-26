# Todo App Backend

A simple todo app backend built with Express and MongoDB.

## API Endpoints

### GET /api/v1/tasks

Returns all tasks in the MongoDB collection.

### GET /api/v1/tasks/:id

Returns the details of the task with the specified id.

### POST /api/v1/tasks

Creates a new task in the collection with the details provided in the body of the request.

### PATCH /api/v1/:id

Changes the details of the task with the specified id.

### DELETE /api/v1/:id

Deletes the task with the specified id from the collection.

## Built With

- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - NoSQL database



## Acknowledgments

This project was created as a course project for the John Smilga and FreeCodeCamp Express course.

