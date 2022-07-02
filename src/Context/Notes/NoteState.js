import React from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
    const state={
        "college":"Sahyadri",
        "course":"Engineering"
    }
    return(
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
