# Node.js LTS
FROM node:20-alpine

# App directory
WORKDIR /usr/src/app

# Copy package and install dependencies
COPY package*.json ./
RUN npm install 

# Copy all files
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
