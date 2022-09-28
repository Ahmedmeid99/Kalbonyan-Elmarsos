const request = require("supertest");
const app = require("../src/app");

test("should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "AHMED",
      email: "ahmedcool@gmail.com",
      password: "mypass777!",
    })
    .expect(201);
});
