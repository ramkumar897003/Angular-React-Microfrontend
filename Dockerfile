# Stage 1: Build the React apps
FROM node:18.16.0-alpine AS builder

# Set working directory for the angular app
WORKDIR /angular

# Copy package.json and package-lock.json for the angular app
COPY package*.json ./

RUN npm i

# Copy the angular app source code
COPY . .

RUN npm run build:angular

# Set working directory for the react app
WORKDIR /react

# Copy package.json and package-lock.json for the react app
COPY package*.json ./

RUN npm i

# Copy the react app source code
COPY . .

RUN npm run build:react

# Stage 2: Serve the apps using Nginx
FROM nginx:alpine

# Copy the Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built apps from the previous stage to the Nginx server
COPY --from=builder /angular/dist/apps/angular /usr/share/nginx/html/angular
COPY --from=builder /react/dist/apps/react /usr/share/nginx/html/react

# Expose the port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
