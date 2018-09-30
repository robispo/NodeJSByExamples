const request = require("supertest");

const app = require("./server").app;

it('should be responding "Hello World!!!"', done => {
  request(app)
    .get("/")
    .expect(200)
    .expect("Hello World!!!")
    .end(done);
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
