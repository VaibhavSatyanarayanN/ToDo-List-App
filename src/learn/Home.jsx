import React,{useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import noteContext from "./Context/Notes/NoteContext";

export default function Home() {
  let Navigate = useNavigate();
  const a =useContext(noteContext);
  let user = [
    { name: "anil", id: "1" },
    { name: "ram", id: "2" },
    { name: "suraj", id: "3" },
    { name: "uyam", id: "4" },
  ];
  return (
    <>
      {user.map((item) => (
        <div>
          <Link to={"/user/" + item.name + "/" + item.id}>{item.name}</Link>
        </div>
      ))}

      <h1>This is a Home page</h1>
      <button
        onClick={() => {
          Navigate("/atm");
        }}
      >
        Go to Atm page
      </button>
      This is {a.college}
    </>
  );
}
