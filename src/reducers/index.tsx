import { combineReducers } from "redux";
import counter from "./counter";
import todoReducer from "./todo";



const rootReducer = combineReducers({
    counter,
    todoReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
