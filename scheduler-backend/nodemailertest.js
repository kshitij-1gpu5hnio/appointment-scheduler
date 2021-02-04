require("dotenv").config();
const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASS
    }
});
  
let mailDetails = { 
    from: process.env.GMAIL_ID, 
    to: 'kshitij.bharde@tutanota.com', 
    subject: 'Test mail', 
    text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occurs'); 
    } else { 
        console.log('Email sent successfully'); 
    } 
});