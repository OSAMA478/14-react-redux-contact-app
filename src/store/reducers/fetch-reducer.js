import {
	FETCH_INIT,
	FETCH_SUCCESS,
	FETCH_FAILED,
	DELETE_CONTACT,
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

		case DELETE_CONTACT: {
			const updatedContacts = state.contacts.filter(
				(contact) => contact.id !== payload
			);
			return {
				...state,
				contacts: updatedContacts,
			};
		}

		default:
			return state;
	}
};
