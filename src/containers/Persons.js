import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { addPerson, removePerson } from "../store/actions";

class Persons extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <AddPerson personAdded={this.props.add} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.remove(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  persons: state.persons
});
const mapDispatchToProps = dispatch => {
  return {
    add: (name, age) => dispatch(addPerson(name, age)),
    remove: id => dispatch(removePerson(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
