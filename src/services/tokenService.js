//set the token
export const setToken = token => {
  localStorage.setItem("token", token);
};

// get the token
export const getToken = () => {
  return localStorage.getItem("token");
};

// remove the token
export const removeToken = () => {
  localStorage.removeItem("token");
};
