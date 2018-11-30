const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state.persons,
        persons: state.persons.concat(action.newPerson)
      };
    case "REMOVE_PERSON":
      return {
        ...state.persons,
        persons: state.persons.filter(person => person.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;
