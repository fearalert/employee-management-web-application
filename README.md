# Employment Management CRUD App using Node.js, Express.js, HTMl, and CSS

This is an Employee Management System built using the MongoDB, Express, HTML, CSS, and Node.js. This project is dockerized to simplify the setup and running process.

## Folder Structure

The directory structure of the projects looks like:

```sh
employee-management/
│
├── views/
│   ├── index.ejs
│   ├── edit.ejs
│   ├── add.ejs
│
├── public/
│   └── styles.css
│
├── models/
│   └── Employee.js
│
├── routes/
│   └── employee.js
│
├── app.js
└── package.json
└── package-lock.json
├── Dockerfile
└── docker-compose.yaml
```

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Docker**: [Download and Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Included with Docker Desktop on Windows and macOS. On Linux, you may need to install it separately. [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to get the project running:

### 1. Clone the Repository

```bash
git clone https://github.com/fearalert/employee-management-system.git
cd employee-management-system
```

### 2. Set Up Environment Variables

Create a .env file in the root directory of the project with the following content:

```bash
MONGO_URI=mongodb://mongo:27017/employee_management
PORT=3000
```

### 3. Build and Run the Containers

Run the following command to start the application using Docker Compose:

```bash
docker-compose up --build
```
The `--build` flag ensures that the containers are built from the latest version of your code.

### 4. Access the Application

The application will be running on [http://localhost:3000](http://localhost:3000)

The MongoDB service will be running on `localhost:27017`

### 5. Stopping the Application

To stop the application, press `Ctrl + C` in the terminal where Docker Compose is running, or run:

```bash
docker-compose down
```

This command stops and removes the containers but keeps the data stored in the MongoDB volume.

## Troubleshooting

**Cannot connect to MongoDB:** Ensure MongoDB has fully started before the application tries to connect. The application is configured to retry the connection, so it should connect once MongoDB is ready.

**Ports are already in use:** Make sure the ports 3000 and 27017 are not being used by other services on your machine.

## Additional Commands

### Rebuild the Containers

If you make changes to your code, rebuild the containers with:

```bash
docker-compose up --build
```

### View Docker Logs

To view the logs for the running containers:

```bash
docker-compose logs -f
```
