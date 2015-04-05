var Code = require('code');   // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();

//age(2017, 11, 17) -> 2 years, 8 months, 15 days

//age(2015, 3, 6) -> 4 days

var today = new Date(2015, 3, 2);

function age(year, month, day) {
  var results = {};
  results.days = Math.abs(day - today.getDate());
  var monthsDiff = Math.abs(month - today.getMonth());
  var yearsDiff = Math.abs(year - today.getFullYear());
  results.months = monthsDiff === 0 ? undefined : monthsDiff;
  results.years = yearsDiff === 0 ? undefined : yearsDiff;
  return results;
}


lab.test('solves first test', function (done) {
  var results = age(2015, 3, 6);
  Code.expect(4).to.equal(results.days);
  Code.expect(undefined).to.equal(results.months);
  Code.expect(undefined).to.equal(results.years);
  done();
});

lab.test('solves first test', function (done) {
  var results = age(2015, 3, 7);
  Code.expect(5).to.equal(results.days);
  Code.expect(undefined).to.equal(results.months);
  Code.expect(undefined).to.equal(results.years);
  done();
});

lab.test('solves first test', function (done) {
  var results = age(2016, 4, 7);
  Code.expect(5).to.equal(results.days);
  Code.expect(1).to.equal(results.months);
  Code.expect(1).to.equal(results.years);
  done();
});

lab.test('solves first test', function (done) {
  var results = age(2013, 4, 7);
  Code.expect(5).to.equal(results.days);
  Code.expect(1).to.equal(results.months);
  Code.expect(2).to.equal(results.years);
  done();
});
