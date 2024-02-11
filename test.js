// test.js
import sum from './index.js';
import chai from 'chai';

const expect = chai.expect;

describe('Sum', function() {
    it('should return the sum of two numbers', function() {
        expect(sum(1, 2)).to.equal(3);
    });
});