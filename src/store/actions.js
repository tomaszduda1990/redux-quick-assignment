const addPerson = newPerson => {
  return {
    type: "ADD_PERSON",
    newPerson
  };
};

const removePerson = id => {
  return {
    type: "REMOVE_PERSON",
    id
  };
};

export { addPerson, removePerson };
