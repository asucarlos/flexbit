import React from "react";

const Exercise = ({ exercise }) => {
  const { name, weight, reps, restTime, id } = exercise;
  return (
    <div key={id} className="card">
      <header className="card-header">
        <p className="card-header-title">{name}</p>
        {/* <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a> */}
      </header>
      <div className="card-content">
        <div className="content">
          Exercise description
          <br />
        </div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">Reps: {reps}</p>
        <p className="card-footer-item">Weight: {weight}</p>
        <p className="card-footer-item">Rest Time: {restTime}</p>
      </footer>
    </div>
  );
};

export default Exercise;
