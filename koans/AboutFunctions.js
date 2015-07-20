describe("About Functions", function() {

  it("should declare functions", function() {
    
    function add(a, b) {
      return a + b;
    }
    
    FILL_ME_IN = 3;
    expect(add(1, 2)).toBe(FILL_ME_IN);
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";
    
    function getMessage() {
      return message;
    }
    
    function overrideMessage() {
      var message = "Inner";
      return message;
    }
    
    FILL_ME_IN = "Outer";
    expect(getMessage()).toBe(FILL_ME_IN);
    FILL_ME_IN = "Inner";
    expect(overrideMessage()).toBe(FILL_ME_IN);
    FILL_ME_IN = "Outer";
    expect(message).toBe(FILL_ME_IN);
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
        var variable = "local";
      function childfunction() {
          return variable;
      }
      return childfunction();
    }
    FILL_ME_IN = "local";
    expect(parentfunction()).toBe(FILL_ME_IN);
  });

  it("should use lexical scoping to synthesise functions", function () {
    
    function makeIncreaseByFunction(increaseByAmount) {
      return function (numberToIncrease) {
        return numberToIncrease + increaseByAmount;
      };
    }
    
    var increaseBy3 = makeIncreaseByFunction(3);
    var increaseBy5 = makeIncreaseByFunction(5);
    
    FILL_ME_IN = 28;
    expect(increaseBy3(10) + increaseBy5(10)).toBe(FILL_ME_IN);
  });

  it("should allow extra function arguments", function () {
    
    function returnFirstArg(firstArg) {
      return firstArg;
    }
    
    FILL_ME_IN = "first";
    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);
    
    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }
    
    FILL_ME_IN = undefined;
    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);
    
    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }
    
    FILL_ME_IN = "first,second,third";
    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
  });

  it("should pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };
    
    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };
    
    var praiseSinger = { givePraise: appendRules };
    FILL_ME_IN = "John rules!";
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);
    
    praiseSinger.givePraise = appendDoubleRules;
    FILL_ME_IN = "Mary totally rules!";
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);
      
  });

  it("should use function body as a string", function () {
    var add = new Function("a", "b", "return a + b;");
    FILL_ME_IN = 3;
    expect(add(1, 2)).toBe(FILL_ME_IN);
     
    var multiply = function (a, b) {
      //An internal comment
      return a * b;
    };
    FILL_ME_IN = 'function (a, b) {\n      //An internal comment\n      return a * b;\n    }';
    expect(multiply.toString()).toBe(FILL_ME_IN);
  });    
});
