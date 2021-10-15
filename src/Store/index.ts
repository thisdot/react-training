import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { crashMiddleware } from "./middleware/crashMiddleware";

const middleware = [
  loggerMiddleware, 
  crashMiddleware,
];

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middleware)
));

export default store;