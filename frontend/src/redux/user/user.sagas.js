import {takeLatest, put, all, call} from "redux-saga/effects";
import { setCurrentUserFailure, setCurrentUserSuccess } from "./user.actions";

import UserActionTypes from "./user.types";


export function* fetchUser(){
    try {
        const response = yield fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = yield response.json();
        yield put(setCurrentUserSuccess(data))

    } catch(error) {
        yield put(setCurrentUserFailure(error));
    }
}


export function* onSetCurrentUserStart(){
    yield takeLatest(UserActionTypes.SET_CURRENT_USER_START, fetchUser);
}



export function* userSagas(){
    yield all([
      call(onSetCurrentUserStart)
    ]);
  };