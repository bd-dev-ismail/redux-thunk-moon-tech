import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cartCounter from "./middleware/cartCounter";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, thunk, logger))
);

export default store;
