const Language = require('../models/language');

exports.createExercise = (req, res, next) => {
    delete req.body._id;
    const language = new Language({
        ...req.body
        // title:  req.body.title,
        // description : req.body.description,
        // content:  req.body.content,
        // languages: req.body.languages
    })
    language.save()
    .then(() => res.status(201).json({message : 'Language Created Success'}))
    .catch(error => res.status(400).json({error}))
}

exports.getAllExercise = (req, res, next) => {
    Language.find()
    .then(languages => res.status(200).json(languages))
    .catch(error => res.status(400).json({error}))
}
exports.getExercise = (req, res, next) => {
    Language.findOne({_id: req.param.id})
    .then(languages => res.status(200).json(languages))
    .catch(error => res.status(400).json({error}))
}

exports.modifyExercise = (req, res, next) => {
    Language.updateOne({_id: req.param.id}, {...req.body, _id: req.param.id})
    .then(() => res.status(200).json({message : 'Language Updated'}))
    .catch(error => res.status(400).json({error}))
}

exports.deleteExercise = (req, res, next) => {
    Language.deleteOne({_id: req.param.id})
    .then(languages => res.status(200).message('Language deleted'))
    .catch(error => res.status(400).json({error}))
}

