const expect = require("expect");
const request = require("supertest");

const { app } = require("./../server");
const { Todo } = require("./../models/todo");

// beforeEach(done => {
//Delete all the Todos before run the test.
//Todo.remove({}).then(() => done());
//   done();
// });

describe("POST /todos", () => {
  it("should create a new todo", done => {
    var text = "Salir";
    var todoLength = 0;

    Todo.find()
      .then(t => (todoLength = t.length))
      .catch(e => console.log(e));

    request(app)
      .post("/todos")
      .send({ text })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          done(err);
          return;
        }

        Todo.find()
          .then(t => {
            expect(t.length).toBe(todoLength + 1);
            expect(t[todoLength].text).toBe(text);
            done();
          })
          .catch(e => done(e));
      });
  });

  it("should not create a new todo with invalid body data", done => {
    var todoLength = 0;

    Todo.find()
      .then(t => (todoLength = t.length))
      .catch(e => console.log(e));

    request(app)
      .post("/todos")
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          done(err);
          return;
        }

        Todo.find()
          .then(t => {
            expect(t.length).toBe(todoLength);
            done();
          })
          .catch(e => done(e));
      });
  });
});
