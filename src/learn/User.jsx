import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id,name}=useParams();
    return(
        <>
        <div>
             <h1>User name {name} </h1>
            <h1>User id {id} </h1> 
        </div>
        </>
    )
};
export default User;