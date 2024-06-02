const express = require('express');
const router = express.Router();
const languageController = require('../controllers/language')

router.get('/', languageController.getAllLanguage);
router.get('/:id', languageController.getLanguage);
router.post('/', languageController.createLanguage);
router.delete('/:id', languageController.deleteLanguage);
router.put('/:id', languageController.modifyLanguage);

module.exports = router;