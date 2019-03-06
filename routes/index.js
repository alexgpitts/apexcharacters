var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Apex Characters' });
});

router.get('/Bangalore', function(req, res, next) {
  res.render('bangalore', { title: "Bangalore" });
});

router.get('/Bloodhound', function(req, res, next) {
  res.render('Bloodhound', { title: "Bloodhound" });
});

router.get('/Caustic', function(req, res, next) {
  res.render('Caustic', { title: "Caustic" });
});

router.get('/Gibraltar', function(req, res, next) {
  res.render('Gibraltar', { title: "Gibraltar" });
});

router.get('/Lifeline', function(req, res, next) {
  res.render('Lifeline', { title: "Lifeline" });
});

router.get('/Mirage', function(req, res, next) {
  res.render('Mirage', { title: "Mirage" });
});

router.get('/Pathfinder', function(req, res, next) {
  res.render('Pathfinder', { title: "Pathfinder" });
});

router.get('/Wraith', function(req, res, next) {
  res.render('Wraith', { title: "Wraith" });
});

module.exports = router;

