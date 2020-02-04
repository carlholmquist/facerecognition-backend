const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcryptjs');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

 const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '4085',
      database : 'smartbrain'
    }
  });


const app = express();
app.use(express.json());
app.use(cors());


//This is working endpoint
app.get('/', (req,res)=>{
    res.send(database.users);
})

app.post('/signin', (req,res) => { signin.handleSignIn(req,res,db,bcrypt) });
app.post('/register', (req,res) => { register.handleRegistration(req,res,db,bcrypt) });
app.get('/profile/:id', (req,res) => { profile.handleProfile(req,res,db) });
app.put('/image', (req,res)=> { image.handleImage(req,res,db) });
app.post('/imageurl', (req,res)=> { image.handleApiCall(req,res) });






app.listen(3001,() => {
    console.log('App is running on port 3001');
})
