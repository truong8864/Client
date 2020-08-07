import { AuthenticationAPI } from "./";

const login = (data) => {
  return AuthenticationAPI("login", "POST", data);
};

const checkLogged = () => {
  return AuthenticationAPI("check-logged", "GET");
};

const logout = () => {
  return AuthenticationAPI("logout", "GET");
};

export default { login, checkLogged, logout };
