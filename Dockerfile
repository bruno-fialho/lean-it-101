# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Run the build script to compile TypeScript code
RUN npm run build

# Expose the port that Fastify will run on
EXPOSE 3333

# Define the command to run your app
CMD ["node", "build/server.js"]
