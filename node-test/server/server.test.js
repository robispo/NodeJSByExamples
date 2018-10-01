const request = require("supertest");
const expect = require("expect");

const app = require("./server").app;

describe("Server", () => {
  describe("#GET /", () => {
    it('should be responding "Page not found."', done => {
      request(app)
        .get("/")
        .expect(404)
        .expect(resp => {
          expect(resp.body).toInclude({ error: "Page not found." });
        })
        .end(done);
    });
  });
  describe("#GET /users", () => {
    it("should be responding array of users", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(resp => {
          expect(resp.body).toInclude({ name: "Wilmy", age: 24 });
        })
        .end(done);
    });
  });
});

// app.get("/user", function(req, res) {
//   res.status(200).json({ name: "john" });
// });

// request(app)
//   .get("/user")
//   .expect("Content-Type", /json/)
//   .expect("Content-Length", "15")
//   .expect(200)
//   .end(function(err, res) {
//     if (err) throw err;
//   });
