const expect = require("expect");
const request = require("supertest");

const { app } = require("./../server");
const { Todo } = require("./../models/todo");

const todosDumi = [
  {
    text: "1"
  },
  {
    text: "2"
  },
  {
    text: "3"
  }
];

//Delete all the Todos before run the test.
beforeEach(done => {
  Todo.deleteMany({})
  .then(() => Todo.insertMany(todosDumi))
  .then(() => done());
});

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

describe("get /todos", () => {
  it("should get all todos", done => {
    request(app)
      .get("/todos")
      .expect(200)
      .expect(res => {
        expect(res.body.todos.length).toBeGreaterThan(0);
      })
      .end((err, res) => {
        if (err) {
          done(err);
          return;
        }

        done();
      });
  });
});
