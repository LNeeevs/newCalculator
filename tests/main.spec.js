import { expect } from 'chai';
import { sum, sub, div, mut, elv, rst } from '../src/App';

describe('Main', () => {

  it('Should be return sum of A & B, equals 100', () => {
    expect(sum(50, 50)).to.be.equal(100);
  });

  it('Should be return sub of A & B, equals 100', () => {
    expect(sub(200, 100)).to.be.equal(100);
  });

  it('Should be return div of A & B, equals 100', () => {
    expect(div(1000, 10)).to.be.equal(100);
  });

  it('Should be return mult of A & B, equals 100', () => {
    expect(mut(10, 10)).to.be.equal(100);
  });

  it('Should be return the elev of A & B, equal 100', () => {
    expect(elv(2, 10)).to.be.equal(1024);
  });

  it('Should be return the rest of division of A & B, equals 0', () => {
    expect(rst(10, 2)).to.be.equal(0);
  });

});