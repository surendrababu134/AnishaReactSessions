import { CLEAR_USER_DATA, F_GET_USER_LIST, GET_USER_LIST } from "../constants";


const initialState = {
    getUsersList:[]
};

export default function(state=initialState,action){
    switch(action.type){
        case F_GET_USER_LIST:
            return {...state,getUsersList:action.data}
        case CLEAR_USER_DATA:
            return initialState;
        default:
            return initialState;
    }
}