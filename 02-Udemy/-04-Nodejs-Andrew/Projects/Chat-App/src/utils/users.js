const users = [];

//---------------------------------------------//
// addUser, removeUser, getUser, getUsersInRoom
//---------------------------------------------//

/////////////////////////////////////////////
// ADDUSER FUNCTION
/////////////////////////////////////////////
const addUser = ({ id, username, room }) => {
  // Clear the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return { error: "Username and Room are required" };
  }

  // Check for existing user
  const existingUser = users.find((user) => user.username === username);

  // Validate username
  if (existingUser) {
    return { error: "Username is in use" };
  }

  // Store User
  const user = { id, username, room };
  users.push(user);
  return { user };
};

/////////////////////////////////////////////
// REMOVEUSER FUNCTION
/////////////////////////////////////////////
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

/////////////////////////////////////////////
// GETUSER FUNCTION
/////////////////////////////////////////////
const getUser = (id) => {
  const user = users.find((user) => user.id === id);

  return user;
};
/////////////////////////////////////////////
// GETUSERS IN ROOM FUNCTION
/////////////////////////////////////////////
const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  const usersInRoom = users.filter((user) => user.room === room);

  return usersInRoom;
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
