import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { fetchReducer } from "./reducers/fetch-reducer";
import { modalReducer } from "./reducers/modal-reducer";
import { uiReducer } from "./reducers/ui-reducer";

export const store = configureStore(
	{ reducer: { fetch: fetchReducer, modal: modalReducer, ui: uiReducer } },
	applyMiddleware(thunk)
);
