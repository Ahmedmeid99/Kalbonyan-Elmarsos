// test("Async test demo (done)", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

const { add } = require("../src/math-2/explaination");

test("Test Async function", async () => {
  const result = await add(1, 2);
  expect(result).toBe(3);
});
