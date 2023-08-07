# Use the official Node.js base image
FROM node:14-alpine

# Display the Node.js version
RUN node -v

# Display the npm version
RUN npm -v

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if you're using npm)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Set environment variables if needed
# ENV REACT_APP_API_URL=https://example-api.com

# Expose the port your React app is running on (usually 3000)
EXPOSE 3000

# Command to run your React app when the container starts
CMD ["npm", "start"]