import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";
import todosReducer from "./todosReducer";
import contactsReducer from "./contactsReducer";

export default combineReducers({
  auth: authReducer,
  todos: todosReducer,
  contacts: contactsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
