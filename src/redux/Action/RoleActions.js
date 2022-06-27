import * as types from "./actiontypes";
import * as api from "./../../api";

/**
 * Create role action action creator
 * @param {*} formData
 * @returns data on success or error on fail
 */

export const createRole = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: types.CREATE__ROLE__START,
    });

    const { data } = await api.createRole(formData);

    return dispatch({ type: types.CREATE__ROLE__SUCCESS, payload: data });
  } catch (error) {
    const errorMessage = error.message;
    return dispatch({
      type: types.CREATE__ROLE__FAILURE,
      payload: errorMessage,
    });
  }
};

/**
 * Get a single role action creator
 * @param {*} uuid
 * @returns data on success or error on fail
 */

export const getRole = (uuid) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET__SINGLE__ROLE__START,
    });

    const { data } = await api.getRole(uuid);

    return dispatch({ type: types.GET__SINGLE__ROLE__SUCCESS, payload: data });
  } catch (error) {
    const errorMessage = error.message;
    return dispatch({
      type: types.GET__SINGLE__ROLE__FAILURE,
      payload: errorMessage,
    });
  }
};

/**
 * Get all roles
 * @returns data on success or error on fail
 */

export const getAllRoles = () => async (dispatch) => {
  try {
    dispatch({
      type: types.FETCH__ROLES__START,
    });

    const { data } = await api.getAllRoles();

    return dispatch({ type: types.FETCH__ROLES__SUCCESS, payload: data });
  } catch (error) {
    const errorMessage = error.message;
    return dispatch({
      type: types.FETCH__ROLES__FAILURE,
      payload: errorMessage,
    });
  }
};

/**
 * update role action creator
 * @param {*} formData
 * @param {*} uuid
 * @returns data on success or error on fail
 */

export const updateRole = (uuid, formData) => async (dispatch) => {
  try {
    dispatch({
      type: types.UPDATE__ROLE__START,
    });

    const { data } = await api.updateRole(uuid, formData);

    return dispatch({ type: types.UPDATE__ROLE__SUCCESS, payload: data });
  } catch (error) {
    const errorMessage = error.message;
    return dispatch({
      type: types.UPDATE__ROLE__FAILURE,
      payload: errorMessage,
    });
  }
};

/**
 * Delete role Action creator
 * @param {*} uuid
 * @returns data on success or error on fail
 */

export const deleteRole = (uuid) => async (dispatch) => {
  try {
    dispatch({
      type: types.DELETE__ROLE__START,
    });

    const { data } = await api.deleteRole(uuid);

    return dispatch({ type: types.DELETE__ROLE__SUCCESS, payload: data });
  } catch (error) {
    const errorMessage = error.message;
    return dispatch({
      type: types.DELETE__ROLE__FAILURE,
      payload: errorMessage,
    });
  }
};
