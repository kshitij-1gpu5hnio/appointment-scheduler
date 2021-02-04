# Appointment Scheduler MERN Stack

This is a appointment scheduler built using MongoDb, Express, React and Nodejs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Download Node LTS version here: <https://nodejs.org/en/download/>
- Download VSCode from here: <https://code.visualstudio.com/>
- Install both before continuing
- Download MongoDB from here <https://www.mongodb.com/download-center/community> don’t do anything with it just yet.

### Installing & Starting

- Clone the github repo in your desired location.
- Open scheduler-backend folder and create a file with name .env and add these lines: 
    ```
    #Add a gmail id to send email
    #To send emails, you need to allow less secure app: open the link https://myaccount.google.com/lesssecureapps to Allow less secure apps: ON
    GMAIL_ID=
    #Add gmail password for the same account
    GMAIL_PASS=
    #URL for mongoDb
    DATABASE=mongodb://localhost:27017/appointments
    #Port no for server
    PORT=8000

    ```
- Start two terminal for backend and frontend.
- In the terminal type `npm install` and hit enter.
- Once that finshes, the project is ready to go :)
- Run `npm start` in both the terminal.
- The site is now available at <http://localhost:3000/>

## Built With

- [MongoDB](https://github.com/mongodb/mongo) - Database used.
- [React](https://github.com/facebook/react) - Frontend JavaScript library.
- [Express](https://github.com/expressjs/express) -Server/routing API for web app.
- [Node](https://github.com/nodejs/node) - Backend JS runtime.

## Author

- **Kshitij Bharde**
    
