#Download base image for node which includes Node and npm
FROM node:8

#TODO[Scott]: Fill in the string with personal info (email?)
#Add any other LABELs needed for organising project info.  
LABEL maintainer=""

#Set working directory of container to store everything for application
WORKDIR /app

#Set environment variables
ENV PYTHONUNBUFFERED=1

#TODO[Ash]: Figure out the issue with these copies. 
#Install app dependencies. Copy from frontend src.
COPY package.json /app
COPY package-lock.json /app

#Run the npm install 
RUN npm install

#Bundle app source code
COPY . /app

#Indicate port container listens for connections. Expose to public. 
EXPOSE 8080

#Define the command to run app
CMD [ "npm", "run", "serve:dev" ] 
