var express = require('express');
const hbs = require('nodemailer-express-handlebars')
var router = express.Router();
const path = require('path')
/* GET home page. */
const nodemailer = require('nodemailer');
 
router.post('/form', function(req, res, next) {
  const data=req.body;

// initialize nodemailer
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'kvraghul2018@gmail.com',
            pass: 'dxrabfdeitkqbxbe'
        }
    }
);

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))

  
    if (data.email) {
      const mailOptions = {
        from: '"Versys" <kvraghul2018@gmail.com>', // sender address
        template: "email", // the name of the template file, i.e., email.handlebars
        to: data.email,
        subject: `Contact Mail`,
        context: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
      };
      try {
         transporter.sendMail(mailOptions);
         const result={success:true,msg:"Mail sent successfully"};
         res.send(result);
      } catch (error) {
        const result={success:false,msg:"Mail sent failed"};
        res.send(result);
      }
    }
  




});

module.exports = router;


