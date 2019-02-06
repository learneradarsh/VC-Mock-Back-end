const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const makeAnImpact = require('./router/makeImpact/makeImpact');
const accountSummary = require('./router/accountSummary/accountSummary');
const investmentDashboard = require('./router/investmentDashboard/investmentDashboard');
const investmentOption = require('./router/investmentOptionUST/investmentOption/investmentOption');
const myInvestment = require('./router/investmentOptionUST/myInvestment/myInvestment');


app.use(morgan('combined'))
app.use(cors());
app.use(express.json());


app.use('/grant', makeAnImpact)
app.use('/', accountSummary)
app.use('/', investmentDashboard)
//app.use('/', investmentOption)
app.use('/', myInvestment)

 

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

