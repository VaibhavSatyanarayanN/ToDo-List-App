import React,{useState} from "react"



export default function Count(){
    
    const [count ,setCount]=useState(0)
    function increase(){
        setCount(prevCount => prevCount+1)
    }
    function decrease(){
        setCount(prevCount => prevCount-1)
    }
    return(
    <div>
        <button onClick={decrease}>decrease</button>
        <p>{count}</p>
        <button onClick={increase}>increse</button>
    </div>
    )
}