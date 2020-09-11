import React from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends React.Component {
  state = {
    username: "Jon",
  };

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  // state = {
  //   persons: [
  //     { name: "Jonathan", age: 30 },
  //     { name: "Danela", age: 27 },
  //     { name: "Nathaniel", age: 1 },
  //   ],
  //   otherState: "some other value",
  // };

  // switchNameHandler = (newName) => {
  //   // console.log("was clicked!");
  //   // DON'T DO THIS: this.state.persons[0].name = "JAP";
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 30 },
  //       { name: "DLP", age: 27 },
  //       { name: "NLP", age: 1 },
  //     ],
  //   });
  // };

  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: "JAP", age: 30 },
  //       { name: event.target.value, age: 27 },
  //       { name: "NLP", age: 1 },
  //     ],
  //   });
  // };

  render() {
    // const style = {
    //   backgroundColor: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    // };

    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput />
        <UserOutput userName="Than" />
        {/* <div />
        <button style={style} onClick={() => this.switchNameHandler("JONJON")}>
          Switch Name
        </button> */}
        {/* <button onClick={this.switchNameHandler.bind(this, "JONATHAN")}>
          Switch Name
        </button> */}
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "JON")}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        /> */}
      </div>
    );
  }
}

export default App;
