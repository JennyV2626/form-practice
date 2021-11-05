var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/results', function(req, res){
  res.render('results', {
    books: req.body.books,
    movies: req.body.movies,
    bookGenre: req.body.bookGenre,
    otherBookGenre: req.body.otherBookGenre,
    description: req.body.description,
    hobbyChoice: req.body.hobbyChoice,
    color: req.body.color
  });
})

module.exports = router;
