const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../app'); // Adjust the path according to your project structure

describe('Mortgage Calculator Test', () => {
    it('should calculate monthly payment correctly', (done) => {
        request(app)
            .post('/calculate')
            .type('form')
            .send({ principal: 100000, interestRate: 5, years: 30 })
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.include('Monthly Payment: 536.82');
                done();
            });
    });
});