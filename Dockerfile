FROM node:18-alpine AS base

	# Set the working directory
WORKDIR /app
 
# Copy the package.json and yarn.lock files
COPY package.json ./
 
# Install dependencies
RUN npm install
 
# Copy the application code
COPY . .
 
# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
 
# Build the application
RUN npm run build:test
 
# Expose the port
EXPOSE 3000
 
# Start the application
CMD ["npm", "start"]
 
# Add labels
LABEL maintainer="Allen"
LABEL version="0.5.0"