var express = require('express');
var router = express.Router();
var rootPath = require('../../util')

router.get('/vceptpl/api/investmentdashboard/account/:accountId', function(req, res){
    var options = rootPath('public/investmentDashboard');
    var fileName = "investmentdashboard"+req.params.accountId+".json";
          res.sendFile(fileName, options, (err) =>  {
            if (err) {
              next(err);
            } else {
              console.log('Sent:', fileName);
            }
          });
});

module.exports = router;
