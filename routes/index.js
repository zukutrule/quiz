var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});


router.get('author', function(req, res) {
  res.render('author', { title: 'creditos' });
});


router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',   quizController.answer);
router.get('/author', quizController.author);

//Definicion de rutas de /quizes
//router.get("/quizes", quisController.index);
//router.get("/quizes/:quizId(\\d+)", quisController.show);
//router.get("/quizes/:quizId(\\d+)/answer", quisController.answer);



module.exports = router;
