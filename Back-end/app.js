var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const datalayer = require('./modules/DataLayer')
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//New Registration
app.post('/api/create-user', (req, res) => {
  var user = req.body.username; //getting the parameters
  var mail = req.body.email;
  var pass = req.body.password;
  console.log(mail);
  datalayer.check_username(user, 
    (err,result) => { //gets the result from the callback
     if(result == false)
     {
      datalayer.check_email(mail, 
        (err,result) => { //gets the result from the callback
         if(result == false)
         {
          datalayer.create_user(user, pass, mail,
            (err,result) => { //gets the result from the callback
             if(result == true)
             {
              res.send({status: 2})
             }
             else{
               res.send({status: 3})
             }
          })
         }
         else{
           res.send({status: 1})
         }
      })

     }
     else{
       res.send({status: 0})
     }
	})
});

 
//checks if the username and password exist in the database
app.get('/api/LoginValidation', (req, res) => {


  datalayer.Password_Validation(req.query.username,req.query.password, 
    (err,result) => { //gets the result from the callback
      if(result)
      {
      datalayer.GetID(req.query.username, 
        (err,result) => { //gets the result from the callback
          res.send({status: result.Res, ID: result.ID });
      })
    }
    
  })
});

//loads all adds from the database
app.get('/api/loadAds', (req, res) => {
  datalayer.loadAds( 
    (err,result) => { //gets the result from the callback

      res.send(result);
	})
});

//loads the specific ads for the specific user
app.get('/api/loadSpecificAds', (req, res) => {
  console.log(req.query.userID)
  datalayer.loadSpecificAds(req.query.userID,
    (err,result) => { //gets the result from the callback

      res.send(result);
	})
});

//loads adds from saved list
app.get('/api/loadSaved', (req, res) => {
  console.log(req.query.userID) //testing purposes
  datalayer.loadSaved(req.query.userID,
    (err,result) => { //gets the result from the callback

      res.send(result);
	})
});

//loading messages from the database for the user
app.get('/api/loadMessages', (req,res) => {
  datalayer.loadMessages(req.query.userID,
    (err,result) => { //gets the result from the callback
      
      res.send(result);
	})
});

//deleting ads 
app.post('/api/deleteAds', (req,res) => {
console.log(req.body.adID)
  datalayer.deleteAds(req.body.userID1, req.body.adID,
    (err,result) => { //gets the result from the callback
       if(result == true)
       {
        res.send({status: 1}) //if true, success
       }
       else{
         res.send({status: 0}) //else show 404
       }
    })
  });

  //for saving into lists
app.post('/api/save', (req,res) => {
  var userID = req.body.userID //get all information that will be added into the database
  var postingID = req.body.postingID
  var title = req.body.postingTitle
  var description = req.body.postingDescription
  var price = req.body.postingPrice
  
  datalayer.save(userID, postingID, title, description, price, 
    (err,result) => { //gets the result from the callback
      if(result == true)
      {
       res.send({status: 1}) //if true
      }
      else{
        res.send({status: 0}) //if not successful
      }
   })
 });
 
 //for sending a message
 app.post('/api/sendMessage', (req,res) => {
  var senderID = req.body.senderID;
  var receiverID = req.body.receiverID;
  var title = req.body.title;
  var message = req.body.message;
  var senderName = req.body.senderName;
  var receiverName = req.body.receiverName;
  var postingID = req.body.postingID;
 //goes to the data persistent layer
  datalayer.sendMessage(senderID, receiverID, title, message, senderName, receiverName, postingID,
    (err,result) => { //gets the result from the callback
      if(result == true)
      {
       res.send({status: 1}) //if true
      }
      else{
        res.send({status: 0}) //if unsuccessful
      }
   })
 });
  


//for reporting
app.get('/api/report', (req,res) => {

  var report = req.query.report;
  var userID = req.query.userID;
  var postingID = req.query.postingID;
//using nodemailer to send email to the admin
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "mystuff.noreply@gmail.com", //the website email account which will be used as a relay service
        pass: "geri9797"
    }
  });
  
  var mailOptions = {
    from: "mystuff.noreply@gmail.com", //from the website
    to: "gerganzh@gmail.com", //to me
    subject: "Report from user ID:" + userID + ',' + "about posting ID: " + postingID, // email title
    html: report //email content
  };

  //logic for the sending of the mail itself
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send({status: false}); //if unsuccessful
    } else {
      res.send({status: true}); //if successful
    }
  });
   
});

//posting an add
app.post('/api/createPosting', (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  var category = req.body.category;
  var city = req.body.city;
  var price = req.body.price; 
  var features = req.body.features; 
  var condition = req.body.condition; 
  var image = req.body.image;
  var userID = req.body.userID;
  var username = req.body.username;
  console.log("I reach server")
   datalayer.createPosting(title, description, category, condition, city, price, features, image, userID, username,
      (err,result) => { //gets the result from the callback
       if(result == true)
       {
        res.send({status: 1})
       }
       else{
         res.send({status: 0})
       }
    })
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
