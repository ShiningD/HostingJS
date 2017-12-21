var hostConfig = require('../config/hostConfig');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'HostingJS', 
    subTitle: 'This is powered by bruce.',
    configFileName: '<hostConfig.js>',
    config: JSON.stringify(hostConfig, null, 2)
  });
});

module.exports = router;
