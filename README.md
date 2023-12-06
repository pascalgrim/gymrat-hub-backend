# Gymrat Hub Backend

This is the backend for the Gymrat Hub application, built with NestJS.
Frontend can be found [here](https://github.com/pascalgrim/gymrat-hub-frontend). (Work in Progress)

## Features

- Rest Api
- Authentification
- JWT Authorization
- Postgres Database
- Prisma ORM
- Docker

## Installation

Before running the backend, make sure Node.js and npm are installed on your system.

1. Clone the repository:

```bash
git clone https://github.com/your-username/trophy-sync-backend.git
```

2. Set up environment variables by creating a .env file with the following content:

```markdown
DATABASE_URL="postgresql://postgres:123@localhost:5434/nest?schema=public"
JWT_SECRET="YOUR JWT SECRET"
```

The postgres username and password can be edited in the docker-compose.yml file

3. Run Docker container:

```bash
docker compose up dev-db -d
```

4. Run prisma migration:

```bash
npm run prisma:dev:deploy
```

5. Start the application:

```bash
npm run start
```

The backend is now running at http://localhost:3001.
