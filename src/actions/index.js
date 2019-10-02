// to be used later (start of redux)
let nextExerciseId = 0;
export const addExercise = exercise => ({
  type: "ADD_EXERCISE",
  id: nextExerciseId++,
  exercise: { ...exercise }
});

export const setUser = user => ({
  type: "SET_USER",
  user
});

export const removeUser = user => ({
  type: "REMOVE_USER",
  user
});
