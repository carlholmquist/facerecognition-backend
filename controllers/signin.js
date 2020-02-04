handleSignIn = (req,res,db,bcrypt) => {
    const { email, password } = req.body;
    db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
        if (bcrypt.compareSync(password, data[0].hash)){
            return db.select('*').from('users').where('email', '=', email)
            .then(user => {
                res.json(user[0]);
            })
            .catch(err => res.status(400).json('error getting user'))
        }
        throw Error;
    })
    .catch(err => res.status(400).json('wrong user or password'))
};

module.exports = {
    handleSignIn: handleSignIn
};