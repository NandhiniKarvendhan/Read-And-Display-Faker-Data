const supertest = require("supertest");
const app = require("./http_server");
const request = supertest(app);

it("Hello World!", async () => {
  expect(1).toBe(1);
});
var server = app.listen(3000, function () {
  console.log("Running on port 3000!");
});

afterAll((done) => {
  server.close();
  done();
});
