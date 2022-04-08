import { CLEAR_USER_DATA, GET_USER_LIST } from "../constants";


const initialState = {
    getUsersListResponse:null
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_USER_LIST:
            return {...state,getUsersListResponse:action.data}
        case CLEAR_USER_DATA:
            return initialState;
        default:
            return initialState;
    }
}