[![Hamravesh Build and Deploy](https://github.com/MrSinaRJ/novin-dev-assignment/actions/workflows/hamravesh.yml/badge.svg?event=deployment)](https://github.com/MrSinaRJ/novin-dev-assignment/actions/workflows/hamravesh.yml)

[![CI](https://github.com/MrSinaRJ/novin-dev-assignment/actions/workflows/ci.yml/badge.svg)](https://github.com/MrSinaRJ/novin-dev-assignment/actions/workflows/ci.yml)


# 🧩 Chat App - Deployment Guide

This project is built with **NestJS** and uses **MongoDB** for storage. It includes features like chat room creation, user joins, and messaging.

---

## 🔧 Local Development

### 1. Clone the repo and install dependencies

```bash
git clone https://github.com/mrsinarj/novin-dev-assignment.git
cd novin-dev-assignment
yarn install
```

### 2. Set up environment variables

Create a `.env` file in the project root:

```dotenv
PORT=3000
MONGO_URI=mongodb://localhost:27017/chat-system
```

### 3. Start the development server

```bash
yarn start:dev
```

The app should now be running at `http://localhost:3000`.

---

## ⚙️ Example `.env` file

```dotenv
# Application settings
APP_NAME="Novin Dev Assignment"
APP_VERSION="0.0.1"
PORT=3000
NODE_ENV=development

# Pagination defaults
PAGE=1
SIZE=10

# CORS
CORS_ORIGIN=*
CORS_METHODS=GET,POST

# MongoDB connection
MONGODB_URI=<Mongodb HOST>
MONGODB_USER=<Mongodb USER>
MONGODB_PASSWORD=<Mongodb PASSWORD>
MONGODB_DB_NAME=<Mongodb DB>

```

> Note: Ensure MongoDB is running locally or use a cloud-hosted instance like MongoDB Atlas.

---