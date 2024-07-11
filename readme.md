# File Upload Project with Node.js

## Project Description

This project is an application developed with Node.js and JavaScript to handle file uploads, following advanced programming practices.

## Technologies and Practices Used

- **Hexagonal Architecture**: Used to create a modular and scalable code structure.
- **SOLID Principles**: Applied to ensure a robust and maintainable software design.
- **Design Patterns**: Implemented to solve common problems efficiently.
- **Functional Programming**: Leveraged to write concise, predictable, and testable code. It emphasizes the use of pure functions, immutability, and higher-order functions to enhance code modularity and reliability.
- **Automated Testing with Jest**: Used to ensure code quality.
- **Database with MongoDB**: Integrated for data management.
- **Containerization with Docker and Docker Compose**: Used to ensure portability and ease of deployment.

## Project Structure

```plaintext
/
├── src/
│   ├── core/
│   ├── ports/
│   ├── adapters/
├── tests/
│   └── (automated tests with Jest)
├── .dockerignore
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

## Prerequisites

- Node.js
- Docker and Docker Compose
- MongoDB

## How to Run the Project

1. Clone the repository:

```sh
git clone https://github.com/AdilsonFuxe/file-upload
cd file-upload
```

2. Install the dependencies:

```sh
npm install
```

3. Configure the environment (environment variables, database, etc.)

4. Run the application:

```sh
npm start
```

## Run with Docker

1. Build and run the containers:

```sh
docker-compose up
```

## Run Tests

To run the automated tests, use the following command:

```sh
npm test
```

## API Endpoints

### Upload File

**POST** `http://localhost:5050/api/v1/uploads`

- **Description**: Receives a file of type multipart form.
- **Response**: Returns 201 on success with the following structure:

```json
{
  "url": "http://localhost:5050/api/v1/files/669b391106eadf0f0a0a2c46e318dcad8231e34546dc77db.pdf"
}
```
- **Unexpected Error**: Returns 500 with the following structure:

```json
{
  "error": "some error"
}
```

### Load Upload Files

**GET** `http://localhost:5050/api/v1/uploads`

- **Description**: Can receive a query param `mimeType`.
- **Response**: Returns 200 on success with the following structure:

```json
[
  {
    "name": "Document1.pdf",
    "size": 419415,
    "key": "b55eb91815d5295a0a2652da5fac2eb5cfacedf886bab592.pdf",
    "mimeType": "application/pdf",
    "createdAt": "2024-07-10T13:46:56.073Z",
    "updatedAt": "2024-07-10T13:46:56.073Z",
    "id": "668e90d01491dfda32cb8d13"
  },
  {
    "name": "Document2.pdf",
    "size": 419415,
    "key": "60880eb8b92b0c5ecf400fd1bb81ec07196213f2bd9030f5.pdf",
    "mimeType": "application/pdf",
    "createdAt": "2024-07-10T21:04:09.589Z",
    "updatedAt": "2024-07-10T21:04:09.589Z",
    "id": "668ef749bbedf90325d0884e"
  },
  {
    "name": "Document3.pdf",
    "size": 419415,
    "key": "669b391106eadf0f0a0a2c46e318dcad8231e34546dc77db.pdf",
    "mimeType": "application/pdf",
    "createdAt": "2024-07-11T10:24:18.326Z",
    "updatedAt": "2024-07-11T10:24:18.326Z",
    "id": "668fb2d27967b28f48f1fc82"
  }
]
```
- **Unexpected Error**: Returns 500 with the following structure:

```json
{
  "error": "some error"
}
```

### Load Upload File by Id

**GET** `http://localhost:5050/api/v1/uploads/:id`

- **Description**: Returns the file corresponding to the provided ID.
- **Response**: Returns 200 on success with the following structure:

```json
{
  "name": "Some document",
  "size": 419415,
  "key": "b55eb91815d5295a0a2652da5fac2eb5cfacedf886bab592.pdf",
  "mimeType": "application/pdf",
  "createdAt": "2024-07-10T13:46:56.073Z",
  "updatedAt": "2024-07-10T13:46:56.073Z",
  "id": "668e90d01491dfda32cb8d13",
  "url": "http://localhost:5050/api/v1/files/b55eb91815d5295a0a2652da5fac2eb5cfacedf886bab592.pdf"
}
```
- **Response**: Returns 404 if the document ID does not exist with the following structure:

```json
{
  "error": "This file not found"
}
```
- **Unexpected Error**: Returns 500 with the following structure:

```json
{
  "error": "some error"
}
```

### Delete Upload File by Id

**DELETE** `http://localhost:5050/api/v1/files/:id`

- **Description**: Deletes the file corresponding to the provided ID.
- **Response**: Returns 204 on success.

- **Response**: Returns 404 if the document ID does not exist with the following structure:

```json
{
  "error": "This file not found"
}
```
- **Unexpected Error**: Returns 500 with the following structure:

```json
{
  "error": "some error"
}
```

## Contribution

1. Fork the project.
2. Create a new branch: `git checkout -b my-feature`
3. Make your changes and commit them: `git commit -m 'My new feature'`
4. Push to the remote repository: `git push origin my-feature`
5. Open a pull request.
