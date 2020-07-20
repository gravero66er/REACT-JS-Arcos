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

app.post('/api/forma', async (req, res) => {
    let data = req.body
    let smtpTransport = nodeMailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'sofin@td-arcos.ru',
            pass: 'Sjfudry6'
        }
    });

    let mailOptions = {
        from: 'sofin@td-arcos.ru',
        to: 'sofin@td-arcos.ru, s03@td-arcos.ru',
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

    // try {
    //     const info = await smtpTransport.sendMail(mailOptions);
    //     console.log(info);
    //     res.status(200);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send(error);
    // } finally {
    //     smtpTransport.close();
    // }

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