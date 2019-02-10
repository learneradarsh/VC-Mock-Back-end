var express = require('express');
var router = express.Router();
var rootPath = require('../../../util')

router.get('/vceptpl/api/investmentoption', function(req, res){
  var options = rootPath('public/investmentOptionDrupal');
    var fileName = "investmentOption"+".json";
          res.sendFile(fileName, options, (err) =>  {
            if (err) {
              next(err);
            } else {
              console.log('Sent:', fileName);
            }
          });
});

module.exports = router;
