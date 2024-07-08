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
git clone https://github.com/your-username/repository-name.git
cd repository-name
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
docker-compose up --build
```

## Run Tests

To run the automated tests, use the following command:

```sh
npm test
```

## Contribution

1. Fork the project.
2. Create a new branch: `git checkout -b my-feature`
3. Make your changes and commit them: `git commit -m 'My new feature'`
4. Push to the remote repository: `git push origin my-feature`
5. Open a pull request.
