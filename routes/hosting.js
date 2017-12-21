var hostConfig = require('../config/hostConfig');
var fs = require('fs');
var path = require("path");
var express = require('express');
var router = express.Router();

/* GET hosting listing. */
router.get('*', function(req, res, next) {

    const fileUrl = req.originalUrl;
    const filePath =  path.normalize(hostConfig.SERVER_CONTEXT + fileUrl);

    if(req.app.get('env') === 'development'){
        console.log('fileUrl : ' + fileUrl);
        console.log('filePath : ' + filePath);
    }
    
    fs.exists(filePath, function (exists) {
        if (exists) {
            fs.readFile(filePath, function (err, data){
                res.end(data);
            });
        } else {
            res.end('file is not exists');
        }
    })
});

module.exports = router;
