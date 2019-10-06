import React from "react";
import TimeParser from "../../helper/TimeParser"

const Exercise = ({ exercise}) => {
  const { name, weight, reps, sets, restTime, notes, id } = exercise;
  return (
    <li key={id} className="card">
      <header className="card-header">
        <p className="card-header-title">{name}</p>
        <div href="#" className="card-header-icon" aria-label="more options">
          <span className="icon card-header-icon">
            <i className="fas fa-times" aria-hidden="true"></i>
          </span>
        </div>
      </header>
      {notes ? (
        <div className="card-content message is-primary">
          <div className="message-body">{notes}</div>
          <br />
        </div>
      ) : null}
      <footer className="card-footer">
        <p className="card-footer-item">Reps: {reps}</p>
        <p className="card-footer-item">Sets: {sets}</p>
        <p className="card-footer-item">Weight: {weight} lbs</p>
        <p className="card-footer-item">
          Rest Time: {TimeParser(restTime)}
        </p>
      </footer>
    </li>
  );
};

export default Exercise;
