const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exercise')
const auth = require('../middleware/auth')

router.get('/', exerciseController.getAllExercise);
router.get('/:id', exerciseController.getExercise);
router.post('/', auth, exerciseController.createExercise);
router.delete('/:id', auth, exerciseController.deleteExercise);
router.put('/:id', auth, exerciseController.modifyExercise);

module.exports = router;