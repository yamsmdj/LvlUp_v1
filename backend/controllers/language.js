const Language = require('../models/language');

exports.createLanguage = (req, res, next) => {
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

exports.getAllLanguage = (req, res, next) => {
    Language.find()
    .then(languages => res.status(200).json(languages))
    .catch(error => res.status(400).json({error}))
}
exports.getLanguage = (req, res, next) => {
    Language.findOne({_id: req.params.id})
    .then(languages => res.status(200).json(languages))
    .catch(error => res.status(400).json({error}))
}

exports.modifyLanguage = (req, res, next) => {
    Language.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message : 'Language Updated'}))
    .catch(error => res.status(400).json({error}))
}

exports.deleteLanguage = (req, res, next) => {
    Language.deleteOne({_id: req.params.id})
    .then(languages => res.status(200).message('Language deleted'))
    .catch(error => res.status(400).json({error}))
}

