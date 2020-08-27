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
            user: 'ArcosMailForm@yandex.ru',
            pass: 'Arcos2115229'
        }
    });

    let mailOptions = {
        from: 'ArcosMailForm@yandex.ru',
        to: 'sofin@td-arcos.ru, s03@td-arcos.ru',
        subject: `${data.name} ${data.lastname} спрашивает ГК "Аркос"`,
        html: `
        <h3>Данные:</h3>
        <ul>
            <li>Имя: ${data.name}</li>
            <li>Фамилия: ${data.lastname}</li>
            <li>Email: ${data.email}</li>
            <li>Телефон: ${data.phone}</li>
        </ul>
        <h3>Сообщение:</h3>
        <p>${data.message}</p>
        `
    };

    try {
        const info = await smtpTransport.sendMail(mailOptions);
        console.log(info);
        res.status(200);
        res.send('Success!');
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    } finally {
        smtpTransport.close();
    }

    // smtpTransport.sendMail(mailOptions, (error, resp) => {
    //     if (error) {
    //         res.send(error)
    //     } else {
    //         res.send('Success!')
    //     }
    // })

    smtpTransport.close();  

})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server starting at port ${PORT}`)
})