import React, { Component } from "react";
import Exercise from "../Exercise/Exercise";

class ExerciseList extends Component {
  constructor() {
    super();
    this.state = {
      noResultText: "",
      noResultClasses: ""
    }
  }

   componentDidMount() {
    const noRes = setTimeout(()=> {
        this.setState({
          noResultText: "It looks like no exercises were loaded! <strong>Double Check Server Connection</strong>",
          noResultClasses: "notification is-danger"
        });
    },
    1000
    );
    return noRes;
  }

  componentWillUnmount() {
    clearInterval(this.setTimeout);
  }

  render() {
    const { exerciseList } = this.props;

    return (
      <section className="box">
        <h1 className="title">Exercise List</h1>
        {exerciseList
          ? exerciseList.map((exercise, i) => (
              <Exercise key={i} exercise={exercise} />
            ))
          : <div className={this.state.noResClasses}>{this.state.noResText}</div>}
      </section>
    );
  }
}

export default ExerciseList;
