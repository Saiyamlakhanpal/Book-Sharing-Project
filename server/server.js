const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
const knex = require('knex');
const { response } = require('express');

const db = knex({
	client: 'pg',
	connection: {
	  host : '127.0.0.1',
	  user : 'postgres',
	  password : '4gotp@ssword',
	  database : 'book_sharing_system_db'
	}
  });

// db.select('*').from('users').then(data => {
// 	console.log(data);
// });

const app = express();

//Middlewares
app.use(bodyParser.json())
app.use(cors())

//Trial database
const database = {
	users: [
		{
			id: '123',
			name: 'john',
			email: 'john@gmail.com',
			password: 'cookies',
			contact: 1234,
			joined: new Date(),
			books:[]
		},
		{
			id: '124',
			name: 'sally',
			email: 'sally@gmail.com',
			password: 'bananas',
			contact: 1256,
			joined: new Date(),
			books:[]
		}

	],
	login: [
		{
			id:'987',
			hash:'',
			email:''
		}
	]
}

//Root request
app.get('/', (req,res) => {
	res.send(database.users);
})


// /signin --> POST = success/fail
app.post('/signin', (req,res) => {
	db.select('email','hash').from('login')
		.where('email','=',req.body.email)
		.then(data => {
			const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
			if(isValid) {
				return db.select('*').from('users')
				  .where('email','=',req.body.email)
				  .then(user => {
					  res.json(user[0])
				  })
				  .catch(err => res.status(400).json('unable to get user'))
			} else {
				res.status(400).json('wrong credentials')
			}
		})
		.catch(err => res.status(400).json('wrong credentials'))
})

// /register --> POST = user
app.post('/register', (req,res) => {
	const { email, name, password, contact } = req.body;
	const hash = bcrypt.hashSync(password);
		db.transaction(trx => {
			trx.insert({
				hash: hash,
				email: email
			})
			.into('login')
			.returning('email')
			.then(loginEmail => {
				return trx('users')
					.returning('*')
					.insert({
						email: loginEmail[0],
						name: name,
						joining: new Date(),
						contact:contact
					})
					.then(user => {
							res.json(user[0]);
						})
			})
			.then(trx.commit)
			.catch(trx.rollback)
		})
		.catch(err => res.status(400).json('unable to register'))

})


// /profile/:userid --> GET = user
app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	db.select('*').from('users').where({id}).then(user => {
		if(user.length){
			res.json(user[0])
		} else {
			res.status(400).json('Not Found')
		}
		})
		.catch(err => res.status(400).json('error getting user'))
})


app.listen(3000, () => {
	console.log('server is running on port 3000')
});