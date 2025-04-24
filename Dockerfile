# Use a smaller base image
FROM node:lts-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies only
FROM base AS deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the application
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production image
FROM node:lts-alpine AS production
WORKDIR /app

# Copy only necessary files for production
COPY --from=build /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
COPY package.json .

# Start the application
CMD ["node", "dist/src/main.js"]