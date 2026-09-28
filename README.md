# Henry Food — Recipes App

A full stack recipes app built in 2022 as my individual project for the Henry bootcamp: browse, filter and sort recipes, see their steps, and create your own with the diets that apply.

**Live:** [pi-food-project-bdlc.vercel.app](https://pi-food-project-bdlc.vercel.app/) · API: [pi-food-api-bdlc.vercel.app](https://pi-food-api-bdlc.vercel.app/)

<p align="right"><img height="160" src="./cooking.png" alt="" /></p>

## What it does

- **Browse** recipes as cards with pagination, and search them by name.
- **Filter** by diet (vegan, gluten free, and so on) and **sort** by score or alphabetically, in both directions.
- **Detail** page per recipe: summary, health score and step-by-step instructions.
- **Create** a recipe with a controlled form (title, summary, scores, steps, image and diets); it is saved in PostgreSQL and listed next to the others.

## How it's built

| Part | Stack |
| --- | --- |
| `client/` | React, Redux (with thunks), React Router 6, Axios, CSS |
| `api/` | Node.js, Express, Sequelize, PostgreSQL |

The API exposes:

| Method | Route | Description |
| --- | --- | --- |
| GET | `/recipes?name=` | All recipes, or those matching a name |
| GET | `/recipes/:id` | One recipe with its diets |
| GET | `/types` | Diet types |
| POST | `/recipe` | Create a recipe and link its diets |

Recipes come from the Spoonacular API; when it is unavailable, the API falls back to a bundled dataset (`api/data.js`). Recipes created in the app live in PostgreSQL, in a many-to-many relation with diets.

The API runs on Vercel as a serverless function (`api/api/index.js`) with a Neon Postgres database, and creates its tables on the first request.

## Run it locally

```bash
# API (needs a PostgreSQL database)
cd api
npm install
# .env: DATABASE_URL=postgres://... (or DB_USER, DB_PASSWORD, DB_HOST, DB_NAME), PORT=3001
npm start

# Client
cd client
npm install
npm start
```
