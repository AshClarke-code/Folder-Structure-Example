import UserActionTypes from "./user.types";

export const setCurrentUserStart = () => ({
    type: UserActionTypes.SET_CURRENT_USER_START
});

export const setCurrentUserSuccess = user => ({
    type: UserActionTypes.SET_CURRENT_USER_SUCCESS,
    payload: user
});

export const setCurrentUserFailure = error => ({
    type: UserActionTypes.SET_CURRENT_USER_FAILURE,
    payload: error
});