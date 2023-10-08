import {
	FETCH_INIT,
	FETCH_SUCCESS,
	FETCH_FAILED,
	DELETE_CONTACT,
} from "../actions/action-types";

function fetchInit() {
	return {
		type: FETCH_INIT,
	};
}
function fetchSuccess(data) {
	return {
		type: FETCH_SUCCESS,
		payload: data,
	};
}
function fetchFailed(error) {
	return {
		type: FETCH_FAILED,
		payload: error,
	};
}
export function deleteContact(id) {
	return {
		type: DELETE_CONTACT,
		payload: id,
	};
}

export const fetchContacts = () => {
	return async (dispatch) => {
		dispatch(fetchInit());

		try {
			const res = await fetch(
				"https://contact-app-87b13-default-rtdb.firebaseio.com/contacts.json"
			);
			const data = await res.json();

			dispatch(fetchSuccess(data));

			console.log(data);
		} catch (error) {
			dispatch(fetchFailed(error));
		}
	};
};
