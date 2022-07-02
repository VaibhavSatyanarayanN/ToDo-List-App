import React from "react";
import {useState} from "react"
import "./ToDo.css"

export default function ToDo(){

  const [inputList, setInputList] = useState("");
  const [item,setItem]=useState([])

  const setValues= ()=>{
    if(inputList===""){
       setInputList("")
    }
    else{
    setItem(
        (oldVal)=>{
           return [...oldVal,inputList]
        }
    )
      }
    setInputList("")
  }

  const deleteItem = (index)=>{
    setItem((oldItem)=>{
        return oldItem.filter((arr,id)=>{
            return index!==id;
        })
    }) 
  }

    return(
    <>
    <div className="main-div">
      <div className="center-div">
        <br />
            <h1>ToDo List</h1>
        <br />
        <div>

        <input 
        type="text"
        value={inputList}
        placeholder= "Add items "
        onChange={(e)=>setInputList(e.target.value)}
        />
        <button className="in-btn" onClick={setValues}> + </button>

        </div>
        <ul>
            {item.map((itemVal,index)=>{
                return(
                    <>
                     <li>
                     <button className="out-btn" onClick={()=>{ deleteItem(index)}}>x</button>
                    {itemVal}
                </li></>
                    
                )
            })}
        </ul>
      </div>
      <footer>Made by Vaibhav</footer>
    </div>
    </>
    )
}