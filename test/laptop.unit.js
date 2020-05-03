if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("laptop.js", function () {
    describe("laptop()", function () {
        it("returns a random laptop", function () {
            sinon.stub(faker.laptop, 'laptop').returns('asus rog');
            var laptop = faker.laptop.laptop();
  
            assert.equal(laptop, 'asus rog');
            faker.laptop.laptop.restore();
        });
    });
  
    describe("lappymanufacturer()", function () {
        it("returns random lappymanufacturer", function () {
            sinon.stub(faker.laptop, 'lappymanufacturer').returns('dell');
            var lappymanufacturer = faker.laptop.lappymanufacturer();
  
            assert.equal(lappymanufacturer, 'dell');
            faker.laptop.lappymanufacturer.restore();
        });
    });
  
    describe("lappymodel()", function () {
      it("returns random laptop lappymodel", function () {
        sinon.stub(faker.laptop, 'lappymodel').returns('pavellion');
            var lappymodel = faker.laptop.lappymodel();
  
            assert.equal(lappymodel, 'pavellion');
            faker.laptop.lappymodel.restore();
        });
    });
  
    describe("lappymodel()", function () {
        it("returns random laptop lappymodel", function () {
          sinon.stub(faker.laptop, 'lappymodel').returns('pavellion');
              var lappymodel = faker.laptop.lappymodel();
    
              assert.equal(lappymodel,'pavellion');
              faker.laptop.lappymodel.restore();
          });
      });
  });
  