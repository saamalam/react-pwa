FROM node:10.16.0-alpine
# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
WORKDIR /app
#Bundle App files
COPY /src /app/src
COPY ["package.json", "manifest.json", "pawconfig.json", "cloudinary.js", ".eslint", ".env", "tsconfig.json", "tslint.json", "./"]
#Installing dependency
RUN npm install
# Expose the listening port of your app
EXPOSE 30003
CMD ["npm", "start"]