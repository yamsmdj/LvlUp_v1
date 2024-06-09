const express = require('express');
const router = express.Router();
const languageController = require('../controllers/language')
const auth = require('../middleware/auth')

router.get('/', languageController.getAllLanguage);
router.get('/:id', languageController.getLanguage);
router.post('/', auth, languageController.createLanguage);
router.delete('/:id', auth, languageController.deleteLanguage);
router.put('/:id', auth, languageController.modifyLanguage);

module.exports = router;