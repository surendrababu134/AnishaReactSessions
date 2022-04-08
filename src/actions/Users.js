import { CLEAR_USER_DATA, F_GET_USER_LIST, GET_USER_LIST } from "../constants";
import { Get } from "../methods";

export const getUsers = () => dispatch =>{
    Get('https://gorest.co.in/public/v2/users')
    .then(res=>res.json())
    .then(usersList=>{
        dispatch({
            type:GET_USER_LIST,
            data:usersList
        })
    })
    .catch(err=>{

    });
    
}

export function getUserReducer(data){
    return {
        type:F_GET_USER_LIST,
        data
    }
}

export const getFUsers = () => async dispatch =>{
    try{
        let res = await Get('https://gorest.co.in/public/v2/users').then(res=>res.json());
        dispatch(getUserReducer(res))
    }catch(err){
        console.error(err)
    }
}

export const clearUsers = () => dispatch =>{
    dispatch({
        type:CLEAR_USER_DATA,
        data:""
    })
}