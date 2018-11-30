import React from "react";
import "./AddPerson.css";
class AddPerson extends React.Component {
  state = {
    name: "",
    age: undefined
  };
  onNameChangeHandler = e => {
    this.setState({ name: e.target.value });
  };
  onAgeChangeHandler = e => {
    this.setState({ age: e.target.value });
  };
  render() {
    return (
      <div className="AddPerson">
        <input
          type="text"
          onChange={this.onNameChangeHandler}
          placeholder="name"
          value={this.state.name}
        />
        <input
          type="number"
          placeholder="age"
          onChange={this.onAgeChangeHandler}
          value={this.state.age}
        />
        <button
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.age)
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
