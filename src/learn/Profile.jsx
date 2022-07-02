import React from "react";
import {Navigate} from "react-router-dom"

export default function Profile({authorized}){

    if(!authorized){
        return(
            <Navigate to="/login"/>
        )
    }

    return(
        <>
        <div>Hello this is profile page!!!!</div>
        </>
    )
}