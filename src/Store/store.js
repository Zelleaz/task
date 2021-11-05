import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {mainReducer} from "./mainReducer/mainReducer";
import {clientsReducer} from "./clientsReducer/clientsReducer";

const rootReducer = combineReducers({
    main: mainReducer,
    clients: clientsReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunk))