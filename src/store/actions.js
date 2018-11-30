const addPerson = (name, age) => {
  return {
    type: "ADD_PERSON",
    newPerson: {
      name,
      age,
      id: Math.random()
    }
  };
};

const removePerson = id => {
  return {
    type: "REMOVE_PERSON",
    id
  };
};

export { addPerson, removePerson };
