const express = require('express');
const app = express();
const path = require('path');
var nodemailer = require('nodemailer');

const port = process.env.PORT || 3000;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kissj8500@gmail.com',
      pass: 'Lifestyle123'
    }
  });

var mailOptions = {
  from: 'kissj8500@gmail.com',
  to: 'skelox0@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

/* use public folder to root */
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('page/index', { title: "Home"})
});

app.post('/', (req, res) => {
  mailOptions.text = `${req.body.inputName}, ${req.body.inputEmail}, ${req.body.lessons}, ${req.body.fav_language}, ${req.body.vehicle1}, ${req.body.vehicle2}, ${req.body.vehicle3}`
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.redirect('/')
})



app.listen(port, () => console.log(`listening on port http://localhost:${port}`));