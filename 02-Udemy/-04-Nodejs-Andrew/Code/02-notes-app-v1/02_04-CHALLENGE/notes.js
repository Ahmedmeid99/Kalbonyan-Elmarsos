const notes = ["learn node.js", "learn react", "learn js", "learn css"];
const getNotes = () => {
  return notes.map((note) => console.log(`=>${note}`));
};
module.exports = getNotes;
