import {loginreducerforteachers} from "./loginreducerforteachers" 


import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    loginreducerforteachers,
    // logoutreducer  // when we dispatch any dispatch function then it dispatched to every function
})

