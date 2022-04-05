import React, { useEffect, useState } from "react";
import Button from "./Button";

/**
 * 1. function name should starts with small char ex: add()
 * 2. function name should be in camel case ex: addTwoNumbers
 * 3. function by default will not return anything
 * 4. If function returnning means you need to provide the return value by using return keyword.
 */

const FunctionalComponent = ({compName}) =>{
    const [count, setCount] = useState(0);

    const clickHandler = () =>{
        setCount(count=>count+1);
    }

    useEffect(()=>{
        console.log('call everytime.');//getderivedstatefromprops
    })

    useEffect(()=>{
        console.log("mount");
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
    },[])
    return (
        <>
            <div>{compName}</div>
            <Button name={`Increment Count by 1: ${count}`} onClick={clickHandler} />
        </>
    )
}

export default FunctionalComponent;