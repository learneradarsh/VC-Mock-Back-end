var express = require('express');
var router = express.Router();
var rootPath = require('../../util')

router.get('/granted_charity/account/:accountId', function(req, res){
    var options = rootPath('public/makeImpact/savedCharities');
    var fileName = "savedCharities"+req.params.accountId+".json";
          res.sendFile(fileName, options, (err) =>  {
            if (err) {
              next(err);
            } else {
              console.log('Sent:', fileName);
            }
          });
    
});

module.exports = router;
