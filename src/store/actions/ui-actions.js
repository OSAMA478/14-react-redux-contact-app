import { ADD_CONTACT, DELETE_CONTACT } from "./action-types";

export function setFetchedContacts(data) {
	return {
		type: DELETE_CONTACT,
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
