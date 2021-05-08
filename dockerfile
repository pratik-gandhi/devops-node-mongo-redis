FROM node:14
WORKDIR /app

# Copy pakcage.json before to allow
# docker to cache install of "node_modules"
COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
    fi

# Copy everything from 
COPY . ./

# Expose port to bind to
EXPOSE 5000

# Start index.js
ENTRYPOINT [ "npm", "run", "dev"]