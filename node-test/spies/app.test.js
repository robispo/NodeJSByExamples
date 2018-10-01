const expect = require("expect");
const rewire = require("rewire");

const app = rewire("./app");

describe("App", () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);

  it("should call the spy correctly", () => {
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it("should call db.saveUser", () => {
    var user = {
      email: "r@h.com",
      password: "123"
    };
    app.handleSingup(user.email, user.password);
    expect(db.saveUser).toHaveBeenCalled();
    expect(db.saveUser).toHaveBeenCalledWith(user);
  });
});
