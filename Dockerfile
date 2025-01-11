# Step 1: Use an official Node.js image as a base
FROM node:22.11.0

# Step 2: Set the working directory
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies (including dev dependencies like nodemon)
RUN npm install --production=false

# Step 5: Copy the rest of the project files
COPY . .

# Step 6: Compile TypeScript to JavaScript (if applicable)
RUN npm run build

# Step 7: Set the command to run the development server
CMD [ "npm", "run", "dev" ]
