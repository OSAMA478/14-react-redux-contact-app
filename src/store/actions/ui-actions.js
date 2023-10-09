import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_FETCHED_CONTACTS,
} from "./action-types";

export function setFetchedContacts(data) {
	return {
		type: SET_FETCHED_CONTACTS,
		payload: data,
	};
}
export function deleteContact(id) {
	return {
		type: DELETE_CONTACT,
		payload: id,
	};
}
export function addContact(contact) {
	return {
		type: ADD_CONTACT,
		payload: [contact],
	};
}
