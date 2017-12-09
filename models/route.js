const express = require('express');
const app = express();
const nodemailer = require('nodemailer')
const dotEnv = require('dotenv').load();

module.exports = function (app){
    app.get('/',(req, res)=>{
        res.render('index.ejs')
    })
    app.post('/email', (req, res) => {
        console.log(process.env.EMAIL)
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });
        console.log(req.body.email)
        
        let mail = {
            from: req.body.email,
            to: process.env.EMAIL,
            subject: req.body.subject,
            html: req.body.firstname+ '\n' + req.body.name + '\n' +  req.body.email + '\n' + req.body.message
        }
        transporter.sendMail(mail,(error, response) =>{
            if (error) {
                console.log("Mail non envoyé");
                res.redirect('/error')
            } else {
                console.log("Mail envoyé avec succès!")
                res.redirect('/')
            }
            transporter.close();
        });
    })
}