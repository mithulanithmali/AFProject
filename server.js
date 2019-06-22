const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;
app.use(fileUpload());

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended : false
    })
)
const mongoURI = 'mongodb://localhost:27017/studentLogin'

app.post('/uploadfile' ,(req ,res) => {
    if(req.files === null){
        return res.status(400).json({msg : 'No file uploaded'});
    }
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploadedfiles/${file.name}` , err => {
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({fileName : file.name , filePath : `/uploadedfiles/${file.name}`});
    })
});

mongoose
    .connect(mongoURI , {useNewUrlParser : true})
    .then(() => console.log("mongodb connected"))
    .catch(err => console.log(err))

var Users = require('./routes/User')

app.use('/users' , Users)

app.listen(5000 , () => console.log("Server is  Started ......."));