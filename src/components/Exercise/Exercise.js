import React from "react";

const Exercise = ({ exercise }) => {
  const { name, weight, reps, restTime, id } = exercise;
  const parsedRestTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return minutes > 0 ? `${minutes}min ${seconds}sec` : `${seconds} sec`;
  };
  return (
    <li key={id} className="card">
      <header className="card-header">
        <p className="card-header-title">{name}</p>
        <div href="#" className="card-header-icon" aria-label="more options">
          <span className="icon card-header-icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
      </header>
      <div className="card-content message is-primary">
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum efficitur. Aenean ac <em>eleifend lacus</em>, in
          mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor
          urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
          vehicula et sem eget, facilisis sodales sem.
        </div>
        <br />
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">Reps: {reps} Pounds</p>
        <p className="card-footer-item">Weight: {weight}</p>
        <p className="card-footer-item">
          Rest Time: {parsedRestTime(restTime)}
        </p>
      </footer>
    </li>
  );
};

export default Exercise;
