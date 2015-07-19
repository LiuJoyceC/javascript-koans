describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should create arrays", function() {
    var emptyArray = [];
    FILL_ME_IN = "object";
    expect(typeof(emptyArray)).toBe(FILL_ME_IN); //A mistake? - http:javascript.crockford.com/remedial.html
    FILL_ME_IN = 0;
    expect(emptyArray.length).toBe(FILL_ME_IN);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    FILL_ME_IN = 0;
    expect(multiTypeArray[0]).toBe(FILL_ME_IN);
    FILL_ME_IN = "two";
    expect(multiTypeArray[2]).toBe(FILL_ME_IN);
    FILL_ME_IN = 3;
    expect(multiTypeArray[3]()).toBe(FILL_ME_IN);
    FILL_ME_IN = 4;
    expect(multiTypeArray[4].value1).toBe(FILL_ME_IN);
    FILL_ME_IN = 5;
    expect(multiTypeArray[4]["value2"]).toBe(FILL_ME_IN);
    FILL_ME_IN = 6;
    expect(multiTypeArray[5][0]).toBe(FILL_ME_IN);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);
    
    array[0] = 1;
    expect(array).toEqual([1]);
    
    array[1] = 2;
    FILL_ME_IN = 2;
    expect(array).toEqual([1, FILL_ME_IN]);
    
    array.push(3);
    FILL_ME_IN = [1,2,3]
    expect(array).toEqual(FILL_ME_IN);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    FILL_ME_IN = 4;
    expect(fourNumberArray.length).toBe(FILL_ME_IN);
    fourNumberArray.push(5, 6);
    FILL_ME_IN = 6;
    expect(fourNumberArray.length).toBe(FILL_ME_IN);

    var tenEmptyElementArray = new Array(10); 
    FILL_ME_IN = 10;
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);

    tenEmptyElementArray.length = 5;
    FILL_ME_IN = 5;
    expect(tenEmptyElementArray.length).toBe(FILL_ME_IN);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];
    
    FILL_ME_IN = ["peanut"];
    expect(array.slice(0, 1)).toEqual(FILL_ME_IN);
    FILL_ME_IN = ["peanut","butter"];
    expect(array.slice(0, 2)).toEqual(FILL_ME_IN);
    FILL_ME_IN = [];
    expect(array.slice(2, 2)).toEqual(FILL_ME_IN);
    FILL_ME_IN = ["and","jelly"];
    expect(array.slice(2, 20)).toEqual(FILL_ME_IN);
    FILL_ME_IN = [];
    expect(array.slice(3, 0)).toEqual(FILL_ME_IN);
    FILL_ME_IN = ["jelly"];
    expect(array.slice(3, 100)).toEqual(FILL_ME_IN);
    FILL_ME_IN = [];
    expect(array.slice(5, 1)).toEqual(FILL_ME_IN);
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
    }
    passedByReference(array);
    FILL_ME_IN = "changed in function";
    expect(array[1]).toBe(FILL_ME_IN);

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    FILL_ME_IN = "changed in assignedArray";
    expect(array[5]).toBe(FILL_ME_IN);

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    FILL_ME_IN = "three";
    expect(array[3]).toBe(FILL_ME_IN);
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    FILL_ME_IN = [1,2,3]
    expect(array).toEqual(FILL_ME_IN);
    
    var poppedValue = array.pop();
    FILL_ME_IN = 3;
    expect(poppedValue).toBe(FILL_ME_IN);
    FILL_ME_IN = [1,2];
    expect(array).toEqual(FILL_ME_IN);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    FILL_ME_IN = [3,1,2];
    expect(array).toEqual(FILL_ME_IN);
    
    var shiftedValue = array.shift();
    FILL_ME_IN = 3;
    expect(shiftedValue).toEqual(FILL_ME_IN);
    FILL_ME_IN = [1,2];
    expect(array).toEqual(FILL_ME_IN);
  });  
});
