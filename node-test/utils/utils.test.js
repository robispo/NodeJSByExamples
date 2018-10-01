//"test": "mocha **/*.test.js",

const expect = require("expect");

const utils = require("./utils");

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      var exp = 100;
      var res = utils.add(40, 60);

      expect(res)
        .toBe(exp)
        .toBeA("number");
    });

    it("should async add two numbers", done => {
      var exp = 10;
      utils.asyncAdd(4, 6, res => {
        expect(res)
          .toBe(exp)
          .toBeA("number");
        done();
      });
    });
  });
  it("should square a number", () => {
    var exp = 100;
    var res = utils.square(10);

    expect(res)
      .toBe(exp)
      .toBeA("number");
  });

  it("should async square a number", done => {
    var exp = 16;
    utils.asyncSquare(4, res => {
      expect(res)
        .toBe(exp)
        .toBeA("number");
      done();
    });
  });

  it("should has properties firstName and lastName", () => {
    var exp = { age: 29 };
    var res = utils.setName(exp, "Rabel Obispo");

    //Testing that objects are pass by reference.
    expect(res).toBe(exp);

    expect(res).toInclude({
      lastName: "Obispo",
      firstName: "Rabel"
    });
  });
});

it("test expect", () => {
  expect(12).toNotBe(11);
  expect({ name: "Rabel" }).toEqual({ name: "Rabel" });
  expect({ name: "rabel" }).toNotEqual({ name: "Rabel" });
  expect([1, 2, 3, 4]).toInclude(1);
  expect([1, 2, 3, 4]).toNotInclude(5);
  expect([1, 2, 3, 4]).toExclude(5);
  expect({ name: "Rabel", LastName: "Obispo" }).toInclude({ name: "Rabel" });
  expect({ name: "Rabel", LastName: "Obispo" }).toNotInclude({ age: 29 });
});
