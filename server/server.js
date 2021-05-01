const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res) => {
	res.send("test")
})

/*
/signin --> POST = success/fail
/register --> POST = user
/profile/:userid --> GET = user
*/

app.listen(3000, () => {
	console.log('server is running on port 3000')
});