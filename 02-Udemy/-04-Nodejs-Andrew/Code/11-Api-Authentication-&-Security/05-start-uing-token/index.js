const jwt = require("jsonwebtoken");

const meFunction = async () => {
  //create new token
  const token = jwt.sign({ _id: "abc123" }, "node.js-course", {
    expiresIn: "7 days",
  });
  console.log(token);
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE2NjI5OTMyNDQsImV4cCI6MTY2MzU5ODA0NH0.0CsSGutuJEkeYiOA90bXRbTGay0DoMZFw7vOgnRtSJQ
  // verify(تحقق) token and return data
  const data = jwt.verify(token, "node.js-course");
  console.log(data); // { _id: 'abc123', iat: 1662993244, exp: 1663598044 }
};
meFunction();
