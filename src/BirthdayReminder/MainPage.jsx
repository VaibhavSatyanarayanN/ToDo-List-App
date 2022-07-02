import React from "react";
import List from "./List";

export default function MainPage(){
    return(
        <>
        <div className="main-div">
            <div className="center-div">
                <div className="Enter-feild">
                    <h1 className="name1">Enter Details</h1>
                    <input type="text" placeholder="Enter name" className="name" />
                </div>
            </div>
        </div>
        </>
    );
}