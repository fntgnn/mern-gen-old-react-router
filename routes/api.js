var express = require('express');
var router = express.Router();

const PollsController = require ('../controllers/polls');


router.get('/', PollsController.getAllPolls);

router.get('/prova', function(req, res, next) {
  res.json({ message: 'bravo' });
});


module.exports = router;
