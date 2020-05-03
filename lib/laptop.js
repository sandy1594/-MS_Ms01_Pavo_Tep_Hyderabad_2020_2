/**
 *
 * @namespace faker.laptop
 */
var Laptop = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * laptop
     *
     * @method faker.laptop.laptop
     */
    self.laptop = function () {
      return fake('{{laptop.lappymanufacturer}} {{laptop.lappytype}}');
    };
  
    
  
    /**
     * lappymanufacturer
     *
     * @method faker.laptop.lappymanufacturer
     */
    self.lappymanufacturer = function () {
      return faker.random.arrayElement(faker.definitions.laptop.lappymanufacturer);
    };
  
    
  
    /**
     * model
     *
     * @method faker.laptop.lappymodel
     */
    self.lappymodel = function () {
      return faker.random.arrayElement(faker.definitions.laptop.lappymodel);
    };
  
    
  
    /**
     * type
     *
     * @method faker.laptop.lappytype
     */
    self.lappytype = function () {
      return faker.random.arrayElement(faker.definitions.laptop.lappytype);
    };
  
    
  
};
  
  module["exports"] = Laptop;
