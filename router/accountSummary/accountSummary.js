var express = require('express');
var router = express.Router();
var rootPath = require('../../util')

router.get('/vceptpl/api/accountsummarydashboard/account/:accountId', function(req, res){
    var options = rootPath('public/accountSummary/investmentOptions');
    var fileName = "investmentOption"+req.params.accountId+".json";
          res.sendFile(fileName, options, (err) =>  {
            if (err) {
              next(err);
            } else {
              console.log('Sent:', fileName);
            }
          });
});

module.exports = router;
