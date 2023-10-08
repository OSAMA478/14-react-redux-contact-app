import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { fetchReducer } from "./reducers/fetch-reducer";

export const store = configureStore(
	{ reducer: { fetch: fetchReducer } },
	applyMiddleware(thunk)
);
