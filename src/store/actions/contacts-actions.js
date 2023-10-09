import {
	FETCH_INIT,
	FETCH_SUCCESS,
	FETCH_FAILED,
} from "../actions/action-types";
import { setFetchedContacts } from "./ui-actions";

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

export const fetchContacts = () => {
	return async (dispatch) => {
		dispatch(fetchInit());

		try {
			const res = await fetch(
				"https://contact-app-87b13-default-rtdb.firebaseio.com/contacts.json"
			);
			const data = await res.json();

			dispatch(fetchSuccess(data));
			dispatch(setFetchedContacts(data));

			// console.log(data);
		} catch (error) {
			dispatch(fetchFailed(error));
		}
	};
};
export const postContacts = (contact) => {
	return async (dispatch) => {
		dispatch(fetchInit());

		try {
			const res = await fetch(
				"https://contact-app-87b13-default-rtdb.firebaseio.com/contacts.json",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(contact),
				}
			);
			const data = await res.json();

			dispatch(fetchSuccess([data]));

			console.log(data);
		} catch (error) {
			dispatch(fetchFailed(error));
		}
	};
};
export const putContacts = (contact) => {
	return async (dispatch) => {
		dispatch(fetchInit());

		try {
			const res = await fetch(
				"https://contact-app-87b13-default-rtdb.firebaseio.com/contacts.json",
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(contact),
				}
			);
			const data = await res.json();

			dispatch(fetchSuccess([data]));

			console.log(data);
		} catch (error) {
			dispatch(fetchFailed(error));
		}
	};
};
