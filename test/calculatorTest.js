const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Adjust the path to your calculation-service.js
const expect = chai.expect;

chai.use(chaiHttp);

describe('Calculation Service', () => {
  it('should calculate the monthly payment correctly', (done) => {
    const testData = {
      principal: 200000,
      interestRate: 5,
      years: 30
    };

    chai.request(app)
      .post('/calculate')
      .send(testData)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('monthlyPayment');
        expect(res.body.monthlyPayment).to.equal('1073.64'); // Expected result
        done();
      });
  });

  // Add more tests for validation, error cases, etc.
});
