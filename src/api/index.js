import axios from "axios";

/**
 * BASE URL
 */

const API = axios.create({
  baseURL: "https://new-avengers-be-deploy.herokuapp.com/api/v1",
});

/**
 * Get and send Toke along with the request
 */

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return req;
});

/**
 * All role APIs
 */

export const createRole = (formData) => API.post("/roles", formData);
export const getAllRoles = () => API.get("/roles");
export const getRole = (uuid) => API.get(`/roles/${uuid}`);
export const updateRole = (uuid, formData) =>
  API.patch(`/roles/${uuid}`, formData);
export const deleteRole = (uuid) => API.delete(`/roles/${uuid}`);

export const assignBusToRoute = (routeId, busId) =>
  API.post(`/assignbus/${routeId}/${busId}`);
export const unassignBusToRoute = (uuid) => API.delete(`/assignbus/${uuid}`);
export const getBusAssigniment = () => API.get(`/assignbus`);
