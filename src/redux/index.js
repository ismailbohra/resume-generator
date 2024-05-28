import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import resumeReducer from "./slices/resumeslice";
import portfolioReducer from "./slices/portfolioslice";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  resume: resumeReducer,
  portfolio: portfolioReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const createStoreWithMiddleware = applyMiddleware(thunk);
const enhancer = composeEnhancers(createStoreWithMiddleware);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
