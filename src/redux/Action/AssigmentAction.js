import * as type from "./actiontypes";
import * as api from "./../../api";

const baseUrl = process.env.BACKEND_URL;

const token = localStorage.getItem("token");

export const assingBusToRoute =
  ({ routeId, busId }) =>
  async (dispatch) => {
    console.log("routeId", routeId);

    console.log("busId", busId);
    try {
      dispatch({
        type: type.ASSIGN__BUS__TO__ROUTE__START,
      });

      const { data } = await api.assignBusToRoute(routeId, busId);

      return dispatch({
        type: type.ASSIGN__BUS__TO__ROUTE__SUCCESS,
        payload: data,
      });
    } catch (error) {
      const errorMessage = error.message;
      return dispatch({
        type: type.ASSIGN__BUS__TO__ROUTE__FAILURE,
        payload: errorMessage,
      });
    }
  };

export const AllBusToRouteAssignment = () => async (dispatch) => {
  try {
    dispatch({
      type: type.FETCH__ALLBUS__ASSIGNMENT__START,
    });

    const { data } = await api.getBusAssigniment();

    return dispatch({
      type: type.FETCH__ALLBUS__ASSIGNMENT__SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.message;
    return dispatch({
      type: type.FETCH__ALLBUS__ASSIGNMENT__FAILURE,
      payload: errorMessage,
    });
  }
};

export const unassingBusToRoute = (uuid) => async (dispatch) => {
  try {
    dispatch({
      type: type.UNASSIGN__BUS__TO__ROUTE__START,
    });

    const { data } = await api.unassignBusToRoute(uuid);

    return dispatch({
      type: type.UNASSIGN__BUS__TO__ROUTE__SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage = error.message;
    return dispatch({
      type: type.UNASSIGN__BUS__TO__ROUTE__FAILURE,
      payload: errorMessage,
    });
  }
};
