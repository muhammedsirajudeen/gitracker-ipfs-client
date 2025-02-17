# Step 1: Use an official Node.js image as a base for building
FROM node:22.11.0 AS builder

# Step 2: Set the working directory
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies (including dev dependencies for build)
RUN npm install

# Step 5: Copy the rest of the application source code
COPY . .

# Step 6: Compile TypeScript to JavaScript
RUN npm run build

# Step 7: Use a smaller Node.js image for the final container
FROM node:22.11.0-slim

# Step 8: Set the working directory in the final container
WORKDIR /usr/src/app

# Step 9: Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# Step 10: Expose application port (if applicable)
EXPOSE 4000

# Step 11: Set the command to run the app
CMD ["node", "dist/index.js"]
