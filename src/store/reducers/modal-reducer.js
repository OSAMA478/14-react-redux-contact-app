import { HIDE_MODAL, SHOW_MODAL } from "../actions/action-types";

const initialState = {
	isModalShown: false,
};

export const modalReducer = (state = initialState, { type }) => {
	switch (type) {
		case SHOW_MODAL:
			return {
				...state,
				isModalShown: true,
			};

		case HIDE_MODAL:
			return {
				...state,
				isModalShown: false,
			};

		default:
			return state;
	}
};
