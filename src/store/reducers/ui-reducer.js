import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_FETCHED_CONTACTS,
} from "../actions/action-types";

const initialState = {
	contacts: [],
};

export const uiReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_FETCHED_CONTACTS: {
			const fetchedContact = [];
			for (const key in payload) {
				fetchedContact.push({
					id: payload[key],
					address: payload[key].address,
					email: payload[key].email,
					firstName: payload[key].firstName,
					lastName: payload[key].lastName,
					phone: payload[key].phone,
				});
			}
			return {
				...state,
				contacts: fetchedContact,
			};
		}
		case DELETE_CONTACT: {
			const updatedContacts = state.contacts.filter(
				(contact) => contact.id !== payload
			);
			return {
				...state,
				contacts: updatedContacts,
			};
		}
		case ADD_CONTACT: {
			return {
				...state,
				contacts: [...state.contacts].concat(payload),
			};
		}

		default:
			return state;
	}
};
