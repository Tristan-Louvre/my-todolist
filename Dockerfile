# Allow Developers the opportunity to overwrite the default node image at build time.
ARG NODE_IMAGE_VERSION=11.15.0-alpine
FROM node:$NODE_IMAGE_VERSION


# Make and set the work directory in the container.
WORKDIR /opt/my-todolist-service


# Copy the project contents except those items found in the .dockerignore file.
COPY . .


# Install relevant dependencies.
RUN npm install


# Expose provided as documentation of port and does not actually publish the port.
EXPOSE 8080


CMD [ "npm", "start" ]