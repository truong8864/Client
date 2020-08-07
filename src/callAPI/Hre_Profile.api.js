import { API } from "./";

const getListProfile = (filter) => {
  return API("profiles", "GET", { filter });
};

const getProfile = (CodeEmp) => {
  return API(`profiles/${CodeEmp}`, "GET");
};

const createProfile = (data) => {
  return API(`profiles`, "POST", { data });
};

const updateProfile = (CodeEmp, data) => {
  return API(`profiles/${CodeEmp}`, "PUT", { data });
};

export default { getListProfile, getProfile, updateProfile, createProfile };
