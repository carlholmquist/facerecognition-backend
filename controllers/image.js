
const Clarifai = require('clarifai');

const app = new Clarifai.App({
<<<<<<< HEAD
    apiKey: 'f166589c28d04c679584aed6234dce21'
=======
    apiKey: 'API-KEY-HERE'
>>>>>>> e8d074d7ff75d48bbba83b1e055878acfa571164
  })

const handleApiCall = (req,res) => {
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data => res.json(data))
        .catch(err => res.status(400).json('recognition didnt work'))
}

const handleImage = (req,res,db) => {
    const { id } = req.body;
    db('users')
    .where('id', '=', id)
    .increment('entries',1)
    .returning('entries')
    .then(entries => {
        if (entries.length){
        res.json(entries[0]);
        } else {
            throw Error;
        }
    })
    .catch(err => res.status(400).json("unable to get entries"))
};

module.exports = { 
    handleImage: handleImage,
    handleApiCall: handleApiCall
};
