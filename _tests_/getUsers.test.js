// testing the get user one.
const getOneUser = require("@server/controllers/getUsers");

test("get user by id", () => {
  const data = getOneUser(2);
  console.info("data: ", data);
  expect(data.name).toBe("tekle");
});