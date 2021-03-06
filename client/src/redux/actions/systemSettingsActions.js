import axios from "axios";

// import types
import {
	GET_SYSTEM_SETTINGS,
	SYSTEM_SETTINGS_LOADING,
	UPDATE_SYSTEM_SETTINGS,
} from "../types/settingsTypes";

import { GET_ERRORS } from "../types/errorTypes";
import { SET_SUCCESS } from "../types/successTypes";

var url;

if (process.env.NODE_ENV === "production") {
	url = "https://vhi-jm.herokuapp.com/api";
} else {
	url = "http://localhost:5000/api";
}

export const getSystemSettings = () => (dispatch) => {
	dispatch(setSystemSettingsLoading());
	axios
		.get(`${url}/systemsettings`)
		.then((res) => {
			dispatch({
				type: GET_SYSTEM_SETTINGS,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

export const updateSystemSettings = (data) => (dispatch) => {
	dispatch(setSystemSettingsLoading());
	axios
		.patch(`${url}/systemsettings/${data._id}`, data)
		.then((res) => {
			dispatch({
				type: UPDATE_SYSTEM_SETTINGS,
				payload: res.data,
			});
			dispatch({
				type: SET_SUCCESS,
				payload: "Successfully updated the system settings.",
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

export const setSystemSettingsLoading = () => {
	return {
		type: SYSTEM_SETTINGS_LOADING,
	};
};
