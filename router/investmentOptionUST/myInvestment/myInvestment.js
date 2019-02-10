var express = require('express');
var router = express.Router();
var rootPath = require('../../../util')

router.get('/vceptpl/api/myinvestment/account/:accountId', function(req, res){
  var options = rootPath('public/investmentOptionUST/');
  var fileName = "myInvestment"+req.params.accountId+".json";
  res.sendFile(fileName, options, (err) =>  {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

module.exports = router;
