import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';
import App from './App';
import mcqReducer from "./store/reducers/mcqReducer";
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap';

const rootReducer = combineReducers({
    mcq : mcqReducer
});

const store = createStore(
    rootReducer,( applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));