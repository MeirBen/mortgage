const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/calculate', (req, res) => {
  const { principal, interestRate, years } = req.body;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = years * 12;
  const monthlyPayment = principal * monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  res.send(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);
});


module.exports = app;