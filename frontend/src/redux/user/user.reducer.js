import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: "",
    isLoading: true
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                
            }
        case UserActionTypes.SET_CURRENT_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                
            }
        default :
        return state;
    }
};

export default userReducer;