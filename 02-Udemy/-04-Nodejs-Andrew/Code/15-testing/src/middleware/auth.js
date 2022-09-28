const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;

/* [ 1 ] */
// const auth = async (req, res, next) => {
//   console.log("auth middleware"); // auth middleware
//   next();
// };
/* [ 2 ] */
// const auth = async (req, res, next) => {
//   try {
//     const token = req.header("Authorization");
//     console.log(token);
//     /* Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
//     eyJfaWQiOiI2MzFmNzQ5OTU2NWNkMTQ2NGZjNGYzZTAiLCJpYXQiOjE2NjMwMDczMTR9.
//     _136zkFhQt1n2wn9PsK1Y-KChO6KpWtskR3wSueHt6U*/
//     next();
//   } catch (e) {
//     res.status(404).send({ error: "Please authentication" });
//   }
// };
