import {
	FETCH_INIT,
	FETCH_SUCCESS,
	FETCH_FAILED,
} from "../actions/action-types";

const initialState = {
	isLoading: false,
	contacts: [],
	isError: false,
	error: "",
};

export const fetchReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_INIT:
			return {
				...state,
				isLoading: true,
			};

		case FETCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				contacts: payload,
			};

		case FETCH_FAILED:
			return {
				...state,
				isLoading: false,
				isError: true,
				error: payload,
			};

		default:
			return state;
	}
};
