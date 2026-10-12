A containerized Node.js application demonstrating Docker,
automated testing, health checks, and continuous integration
using GitHub Actions.

## Tech Stack

- JavaScript
- Node.js
- Express
- Node.js built-in test runner
- Docker
- GitHub Actions

## Features

- REST endpoints for application information and health checks
- Automated endpoint tests
- Docker image build
- CI pipeline triggered by pushes and pull requests

## Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | / | Application information |
| GET | /health | Application health status |

## Run Locally

Requires Node.js 22 or later.

```bash
npm install
npm test
npm start
```

Open http://localhost:3000/health to check the health endpoint.

## Run with Docker

Build the image:

```bash
docker build -t dockerized-app-cicd .
```

Run the container:

```bash
docker run --rm -p 3000:3000 dockerized-app-cicd
```

Open http://localhost:3000/health.

## Continuous Integration

GitHub Actions automatically installs dependencies, runs tests,
and builds the Docker image on pushes and pull requests.

Check the Actions tab to see the actual workflow results.

## Learning Objectives

- Build and test a Node.js application
- Containerize an application using Docker
- Automate checks using GitHub Actions
- Understand application health endpoints and CI pipelines

