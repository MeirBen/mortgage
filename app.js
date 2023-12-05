const express = require('express');
const app = express();
app.use(express.json()); // for parsing application/json

app.post('/calculate', (req, res) => {
  const { principal, interestRate, years } = req.body;
  if (!principal || !interestRate || !years) {
    return res.status(400).send('Missing parameters');
  }

  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = years * 12;
  const monthlyPayment = principal * monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  res.json({ monthlyPayment: monthlyPayment.toFixed(2) });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Calculation Service running on port ${PORT}`);
});

module.exports = app;
