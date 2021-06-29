const joinNames = (namesObj) => {
  let allNames = namesObj.map((names) => names.name);
  return allNames.join(", ");
};

module.exports = joinNames;
