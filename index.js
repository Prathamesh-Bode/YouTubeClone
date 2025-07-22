var express = require("express");
var app = express();
var port = 4000

const cookieParser = require('cookie-parser');
const cors = require('cors')

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

app.use(express.json());
app.use(cookieParser());
require("./Connections/conn")

const AuthRoutes = require('./Routes/user');
const videoRoutes = require('./Routes/video');
const commentRoutes = require('./Routes/comment');


app.use('/auth',AuthRoutes);
app.use('/api',videoRoutes);
app.use('./commentApi',commentRoutes);
app.listen(port,()=>{console.log("ourbackend project is running on port 4000")});

