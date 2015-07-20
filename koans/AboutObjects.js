describe("About Objects", function () {

  describe("Properties", function () {
    var meglomaniac;

    beforeEach(function () {
       meglomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      FILL_ME_IN = "Joker";
      expect(meglomaniac.mastermind).toBe(FILL_ME_IN);
    }); 

    it("should confirm that properties are case sensitive", function () {
      FILL_ME_IN = "Harley";
      expect(meglomaniac.henchwoman).toBe(FILL_ME_IN);
      FILL_ME_IN = undefined;
      expect(meglomaniac.henchWoman).toBe(FILL_ME_IN);
    });
  });
  

  it("should know properties that are functions act like methods", function () {
    var meglomaniac = { 
      mastermind : "Brain", 
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };
   
    var battleCry = meglomaniac.battleCry(4);
    FILL_ME_IN = "They are Pinky and the Brain Brain Brain Brain";
    expect(FILL_ME_IN).toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentDate = new Date()
    var currentYear = (currentDate.getFullYear());
    var meglomaniac = { 
      mastermind: "James Wood", 
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear; 
      }
    };

    FILL_ME_IN = 2015;
    expect(currentYear).toBe(FILL_ME_IN);
    FILL_ME_IN = 45;
    expect(meglomaniac.calculateAge()).toBe(FILL_ME_IN);
  });

  describe("'in' keyword", function () {
    var meglomaniac;
    beforeEach(function () {
      meglomaniac = { 
        mastermind: "The Monarch", 
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      var hasBomb = "theBomb" in meglomaniac;

      FILL_ME_IN = true;
      expect(hasBomb).toBe(FILL_ME_IN);
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in meglomaniac;
     
      FILL_ME_IN = false;
      expect(hasDetonator).toBe(FILL_ME_IN);
    });    
  });

  it("should know that properties can be added and deleted", function () {
    var meglomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    FILL_ME_IN = false;
    expect("secretary" in meglomaniac).toBe(FILL_ME_IN);

    meglomaniac.secretary = "Agent Smith";
    FILL_ME_IN = true;
    expect("secretary" in meglomaniac).toBe(FILL_ME_IN);
    
    delete meglomaniac.henchman;
    FILL_ME_IN = false;
    expect("henchman" in meglomaniac).toBe(FILL_ME_IN);
  });


  it("should use prototype to add to all objects", function () {
    function Circle(radius)
    {
      this.radius = radius;
    }

    var simpleCircle = new Circle(10);
    var colouredCircle = new Circle(5);
    colouredCircle.colour = "red";
    
    FILL_ME_IN = undefined;
    expect(simpleCircle.colour).toBe(FILL_ME_IN);
    FILL_ME_IN = "red";
    expect(colouredCircle.colour).toBe(FILL_ME_IN);
  
    Circle.prototype.describe = function () {
      return "This circle has a radius of: " + this.radius;
    };
  
    FILL_ME_IN = "This circle has a radius of: 10";
    expect(simpleCircle.describe()).toBe(FILL_ME_IN);
    FILL_ME_IN = "This circle has a radius of: 5";
    expect(colouredCircle.describe()).toBe(FILL_ME_IN);
  });
});
