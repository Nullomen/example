var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/visitor', function(req, res, next) {
  res.render('visitor', { title: 'Express' });
})

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});
router.get('/teams', function(req, res, next) {
  res.render('teams', { title: 'Express' });
});
router.get('/teamdeteil', function(req, res, next) {
  res.render('teamdeteil', { title: 'Express' });
});

module.exports = router;
