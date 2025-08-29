# Bajaj Finserv Test API - Deployment Guide

This guide will help you deploy the API to different platforms.

## Prerequisites

1. Make sure you have all dependencies installed:
   ```
   npm install
   ```

2. Test the API locally:
   ```
   npm start
   ```

3. Send a test request:
   ```
   curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"a\", \"1\", \"334\", \"4\", \"R\", \"$\"]}" http://localhost:3000/bfhl
   ```

## Deployment Options

### 1. Vercel Deployment

1. Sign up for a Vercel account if you don't have one: https://vercel.com/signup
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Log in to Vercel:
   ```
   vercel login
   ```
4. Deploy:
   ```
   vercel
   ```
5. For subsequent deployments:
   ```
   vercel --prod
   ```

### 2. Railway Deployment

1. Sign up for Railway: https://railway.app/
2. Install the Railway CLI:
   ```
   npm i -g @railway/cli
   ```
3. Login:
   ```
   railway login
   ```
4. Initialize your project:
   ```
   railway init
   ```
5. Deploy:
   ```
   railway up
   ```

### 3. Render Deployment

1. Sign up for Render: https://render.com/
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure the following:
   - Build Command: `npm install`
   - Start Command: `node index.js`
   - Environment Variables: Add your environment variables

### 4. Heroku Deployment

1. Sign up for Heroku: https://signup.heroku.com/
2. Install the Heroku CLI:
   ```
   npm install -g heroku
   ```
3. Log in:
   ```
   heroku login
   ```
4. Create a Heroku app:
   ```
   heroku create your-app-name
   ```
5. Deploy:
   ```
   git push heroku main
   ```

## After Deployment

1. Test your deployed API:
   ```
   curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"a\", \"1\", \"334\", \"4\", \"R\", \"$\"]}" https://your-deployed-url.com/bfhl
   ```

2. Submit the API endpoint at: https://forms.office.com/r/ZeVpUYp3zV
