import { combineReducers, applyMiddleware } from "redux";

import main from "./main";

const rootReducer = combineReducers({ main });

export default rootReducer;
