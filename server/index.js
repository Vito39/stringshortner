const express = require('express');
const app = express();
const port =process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = require('./router')(app);

app.listen(port,()=>{
    console.log('server is running on'+port);
})



