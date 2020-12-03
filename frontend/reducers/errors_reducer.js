import { combineReducers } from "redux";
import signupErrorsReducer from "./signup_errors_reducer";
import loginErrorsReducer from "./login_errors_reducer";
import reviewsErrorsReducer from "./reviews_errors_reducer";


const errorsReducer = combineReducers({
  signup: signupErrorsReducer,
  login: loginErrorsReducer,
  reviews: reviewsErrorsReducer
});

export default errorsReducer;