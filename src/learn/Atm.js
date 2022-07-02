import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import "./Atm.css";

export default function Atm() {
  const [flip, setFlip] = useState(false);
  const [cvv, setCvv] = useState("");
  const [no, setNo] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const handleClick = () => {
    setFlip(true);
  };
  const handleClick1 = () => {
    setFlip(false);
  };
  const consloeLog = () => {
    console.log("Card number: " + no);
    console.log("Card holder name : " + name);
    console.log("Expiery month : " + month);
    console.log("Expiery year : " + year);
    console.log("Cvv is : " + cvv);
  };
  return (
    <>
      <div className="main">
        <div className="atm--card">
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div className="front">
              <div className="display--no">{no}</div>
              <div className="display--name">{name}</div>
              <div className="display--time">
                {month} / {year}
              </div>
            </div>

            <div className="back">
              <div className="display">{cvv}</div>
            </div>
          </ReactCardFlip>
        </div>

        <div className="main--input">
          <input
            className="cvv"
            type="text"
            placeholder="card number"
            maxlength="12"
            onClick={handleClick1}
            value={no}
            onChange={(e) => setNo(e.target.value)}
          />
          <input
            className="cvv"
            type="text"
            placeholder="name"
            onClick={handleClick1}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <form className="main--form">
            <select
              onClick={handleClick1}
              className="month"
              name="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="month"> Month </option>
              <option value="01"> January </option>
              <option value="02"> February </option>
              <option value="03"> March </option>
              <option value="04"> April </option>
            </select>
            <select
              onClick={handleClick1}
              className="month"
              name="year"
              value={month}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="year"> Year </option>
              <option value="21"> 2021 </option>
              <option value="22"> 2022 </option>
              <option value="23"> 2023 </option>
              <option value="24"> 2024 </option>
            </select>
            <input
              className="cvv1"
              type="text"
              placeholder="cvv"
              maxlength="3"
              onClick={handleClick}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </form>

          <button onClick={consloeLog}>Click to print values</button>
        </div>
      </div>
    </>
  );
}
