import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getFUsers } from "../../actions/Users";
import Button from "./Button";

/**
 * 1. function name should starts with small char ex: add()
 * 2. function name should be in camel case ex: addTwoNumbers
 * 3. function by default will not return anything
 * 4. If function returnning means you need to provide the return value by using return keyword.
 */

const FunctionalComponent = ({compName}) =>{
    const dispatch = useDispatch();
    const {getUsersList} = useSelector(state=>{
        return {
            getUsersList: state.FUserReducer.getUsersList
        }
    })
    const [count, setCount] = useState(0);
    const [userData,setUserData] = useState(getUsersList);

    const clickHandler = () =>{
        setCount(count=>count+1);
    }

    useEffect(()=>{
        console.log('call everytime.');//getderivedstatefromprops
    })

    useEffect(()=>{
        dispatch(getFUsers())
    },[])

    useEffect(()=>{
        if(count>0){
            console.log("update");
        }
        
    },[count]);

    useEffect(()=>{
        return ()=>{
            console.log("unmount")
        }
    },[]);
    return (
        <>
            <div>{compName}</div>
            <Button name={`Increment Count by 1: ${count}`} onClick={clickHandler} />
            {userData && userData.map((item,index)=>{
                return <p key={item.id}>{item.name}</p>
            })}
        </>
    )
}

export default FunctionalComponent;