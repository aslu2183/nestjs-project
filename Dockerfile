FROM node:18.16.0-alpine3.16

#Docker Container Project Path
WORKDIR /home/my_docker_app/myapp

#Copying Current Directory Package.json and Package-lock.json file into Container Project Path
COPY package*.json ./

#then npm install will be running on Container Path
RUN npm install

#Copying Other folders to Container Project Path
COPY . .

EXPOSE 3005

CMD ["npm", "run", "start:dev"]