export const setUsernameToLoginReducer = (payload) => {
  return {
    type: "SET_USERNAME_TO_LOGIN_REDUCER",
    payload,
  };
};

export const setPasswordToLoginReducer = (payload) => {
  return {
    type: "SET_PASSWORD_TO_LOGIN_REDUCER",
    payload,
  };
};

export const setTokenToLoginReducer = (payload) => {
  return {
    type: "SET_TOKEN_TO_LOGIN_REDUCER",
    payload,
  };
};
