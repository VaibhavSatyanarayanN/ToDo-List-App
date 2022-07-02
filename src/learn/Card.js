import React from "react"

export default function Card(props) {
    return(
        <div className="Main">
            <img className= "main-img"src={props.img}/>
            <div className="content">
                <div className="loc">
                    <h4>{props.location}</h4>
                    <img className="loc-img" src={props.LocImg}/>
                    <a  className ="llink" href={props.link}>view on google map</a>
                </div>
                <h2 className="name">{props.Name}</h2>
                <p className= "date">{props.date}</p>
            <p className ="main-des">{props.Description}</p>
            </div>
        </div>
    )
}