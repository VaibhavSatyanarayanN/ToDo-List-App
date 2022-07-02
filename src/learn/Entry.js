import React, { useRef, useState, useReducer } from "react";
import "./Clock.css"

export default function Entry() {
  var day1;
  var seconds;
  var minutes;
  var hour;
  const [day, setDay] = useState(0);
  const [hou, setHou] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const date = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(date);
  const repeat = () => {
    const d1 = new Date().getTime();
    const d2 = new Date(eventDate).getTime();
    // console.log(new Date(eventDate).toString());
    var diff = Math.abs(d2 - d1);
    day1 = Math.floor((diff / (1000 * 60 * 60 * 24))%7);
    // console.log(day);
    hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    // console.log(hour);
    minutes = Math.floor((diff / (1000 * 60)) % 60);
    // console.log(minutes);

    seconds = Math.floor((diff / 1000) % 60);
    // console.log(seconds);
    const date2 = new Date().toLocaleTimeString();
    setDay(day1);
    setHou(hour);
    setMin(minutes);
    setSec(seconds);
    setCtime(date2);
  };

  const inputRef1 = useRef(null);
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [eventDate, setEventDate] = useState(0);

  const onClick = () => {
    // inputRef.current.focus();
    // setName(inputRef.current.value )
    // inputRef.current.value = ""
    // console.log(inputRef.current.value)

    setInterval(repeat, 1000);
  };

  return (
    <>
      <div className="main--c">
        <div className="main--day">
          <span>{day}D</span> <span>{hou}H </span> <span>{min}M</span>
          <span>{sec}S</span>
        </div>
        <div className="main--con">
          <div className="main--name">
            <h1>{name}</h1>  

            <input
              className="form"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="main--cal">
            <h1>COUNTDOWN</h1>
            <input
              className="form"
              type="date"
              placeholder="Enter day"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />

            <button className="btn" onClick={onClick}>
              Start Countdown
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
