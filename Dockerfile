FROM node:10
# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
WORKDIR /app
#Bundle App files
COPY ["package.json", "manifest.json", "pawconfig.json", "cloudinary.js", ".eslintrc", ".env", "tsconfig.json", "tslint.json", "./"]
#Installing dependency
RUN npm install
COPY . /app/
# Expose the listening port of your app
EXPOSE 3003
CMD ["npm", "start"]