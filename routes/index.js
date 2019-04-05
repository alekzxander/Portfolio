const express = require('express');
const app = express();
const nodemailer = require('nodemailer')
const dotEnv = require('dotenv').load();
const presentation = require('../models/presentation');
const skills = require('../models/skill');
const worksModel = require('../models/work');
module.exports = function (app) {

    app.get('/', async (req, res) => {
        const findPres = await presentation.find({});
        const findSkill = await skills.find({});
        const findWork = await worksModel.find({});

        res.render('index.ejs', { pres: findPres[0], skills: findSkill, works: findWork });
    });
    // CREATE PRESENTATION 
    // app.get('/pres', (req, res) => {
    //     const pres = new presentation({
    //         title: 'Bonjour je m\'appelle Alex.',
    //         content: `Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum`
    //     });
    //     pres.save();
    //     res.redirect('/');
    // });
    // CREATE SKILLS
    // app.get('/skill', (req, res) => {
    //     const createSkill = new skills({
    //         title: 'Base de données',
    //         content: 'Blablabla',
    //         languages: ['MongodDB', 'MYSQL']
    //     });
    //     createSkill.save();
    //     res.redirect('/')
    // });
    // CREATE WORKS 
    // app.get('/works', (req, res) => {
    //     const Works = new worksModel();
    //     const allWorks = [
    //         {
    //             title: `J'ai travaillé sur Sodiac durant mon stage d'observation chez les Red Samourai`,
    //             picture: 'sodiac.png',
    //             link: 'https://www.sodiac.fr/'
    //         },
    //         {
    //             title: `Premier projet en alternance avec Datarock, j'ai travaillé sur la partie back et integration`,
    //             picture: 'cci.png',
    //             link: 'https://www.datashop.reunion.cci.fr/'
    //         },
    //         {
    //             title: 'Projet avec Datarocks, uniquement codé avec ReactJs il permet de géolocaliser des fichiers csv',
    //             picture: 'geocodeur.png',
    //             link: 'http://demo.datarocks.io/geocoder/'
    //         },
    //         {
    //             title: 'Editeur de svg réaliser aussi en alternance tout seul cette fois, avec uniquement du vanilla JS',
    //             picture: 'wipe.png',
    //             link: 'https://svg-wipe.herokuapp.com/'
    //         },
    //     ];
    //     Works.collection.insert(allWorks, (err, docs) => {
    //         if (err) {
    //             return console.log(err)
    //         } else {
    //             console.log(docs)
    //         }
    //     })
    //     res.redirect('/');
    // });
    app.post('/email', (req, res) => {

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

        let mail = {
            from: req.body.email,
            to: process.env.EMAIL,
            subject: req.body.subject,
            html: req.body.email + '\n' + req.body.name + '\n' + req.body.message
        }
        transporter.sendMail(mail, (error, response) => {
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