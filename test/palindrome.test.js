const expect = require('chai').expect;

const isPalindrome = require('../src/palindrome');

describe('isPalindrome', () => {

  it('should return null given no argument', () => {
    expect(isPalindrome()).to.equal(null);
  });

  it('should return null given an empty string', () => {
    expect(isPalindrome('')).to.equal(null);
  });

  it('should ignore non-alphanumeric characters and return the correct result', () => {
    expect(isPalindrome('eye')).true;
    expect(isPalindrome('_ey_e_')).true;
    expect(isPalindrome('racecar')).true;
    expect(isPalindrome('rac_e car')).true;
    expect(isPalindrome('a man, a plan, a canal. panama')).true;
    expect(isPalindrome('02022020')).true;
    expect(isPalindrome('notpalindrome')).false;
    expect(isPalindrome('not_palindrome')).false;
  });

  it('should ignore letter case and return the correct result', () => {
    expect(isPalindrome('RaceCar')).true;
    expect(isPalindrome('Mom')).true;
    expect(isPalindrome('eYe')).true;
    expect(isPalindrome('notSooPalindrome')).false;
  });

});
