const bcrypt = require("bcryptjs");

const myFunction = async () => {
  const password = "eid199963";

  const hashedPassword = await bcrypt.hash(password, 8);

  const isValidPassword = await bcrypt.compare(password, hashedPassword);

  console.log(password); // eid199963
  console.log(hashedPassword); // $2a$08$Dvmg1jQLtO9No1HPKJccieosI1C7HCEtSQXr0nVIZ2/fGmTRyV8aW
  console.log(isValidPassword); // true
};

myFunction();
