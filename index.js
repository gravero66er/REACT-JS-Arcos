const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', () => {
    resizeBy.send('welcome to my form!')
});

app.post('/api/forma', (req, res) => {
    let data = req.body
    let smtpTransport = nodeMailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'arcos_mail_service@mail.ru',
            pass: 'Nodemailer'
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'sofin@td-arcos.ru',
        subject: `Message from ${data.name}`,
        html: `
        <h3>Informations</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Lastname: ${data.lastname}</li>
            <li>Email: ${data.email}</li>
            <li>Phone: ${data.phone}</li>
        </ul>
        <h3>Message:</h3>
        <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, resp) => {
        if (error) {
            res.send(error)
        } else {
            res.send('Success!')
        }
    })

    smtpTransport.close();
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server starting at port ${PORT}`)
})