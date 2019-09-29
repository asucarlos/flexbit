export const getWorkout = () => {
  return JSON.parse(localStorage.getItem("workout"));
};

export const setWorkout = workout => {
  localStorage.setItem("workout", JSON.stringify(workout));
};
