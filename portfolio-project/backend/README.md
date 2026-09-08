# Portfolio backend (Java / Spring Boot)

A small API that supports the portfolio frontend:

- `GET /api/projects` — returns the project list as JSON
- `POST /api/contact` — receives contact-form submissions (name, email, message)

The frontend works completely fine without this running (the contact form
falls back to a `mailto:` link). Run this if you want the form to hit a real
API and to demonstrate the Java side of the assignment.

## Requirements

- JDK 17+
- Maven 3.9+ (needs internet access the first time, to download dependencies)

## Run locally

```bash
cd backend
mvn spring-boot:run
```

The API starts on `http://localhost:8080`. Point the frontend at it by
setting `VITE_API_URL=http://localhost:8080` in `frontend/.env`.

## Run the tests

```bash
mvn test
```

## Build a runnable jar

```bash
mvn clean package
java -jar target/portfolio-backend-1.0.0.jar
```

## Deploying

This is a plain Spring Boot app — deploy the jar to any Java host (Render,
Railway, Fly.io, an EC2/VPS box, etc). After deploying, set two things:

1. On the host: environment variable `FRONTEND_ORIGIN` = your deployed
   frontend URL (e.g. `https://your-name.vercel.app`), so CORS allows it.
2. On the frontend: environment variable `VITE_API_URL` = your deployed
   backend URL, then rebuild/redeploy the frontend.

## Project structure

```
src/main/java/com/orlando/portfolio/
  PortfolioApplication.java     entry point
  config/CorsConfig.java        allows the frontend origin to call the API
  config/GlobalExceptionHandler.java
  controller/ProjectController.java
  controller/ContactController.java
  model/Project.java
  model/ContactMessage.java
  service/ProjectService.java   project data — keep in sync with frontend/src/data/profile.ts
```
