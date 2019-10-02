import React, { Component } from "react";
import Exercise from "../Exercise/Exercise";

class ExerciseList extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.exerciseList);

    const { exerciseList } = this.props;
    return (
      <div className="box">
        {exerciseList
          ? exerciseList.map((exercise, i) => (
              <Exercise key={i} exercise={exercise} />
            ))
          : null}
      </div>
    );
  }
}

export default ExerciseList;
