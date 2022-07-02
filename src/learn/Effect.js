import React, { useEffect, useState } from "react";

export default function Effect() {

const [user,setUser] = useState([])

async function getData(){
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  setUser(await response.json())
}

useEffect(() =>{
  getData()
}, []) 
  

























  // const [user, setUser] = useState([]);
  // const getUsers = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   setUser(await response.json());
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);
console.log(user)
  return ( 
    <div className="main--container">
      {user.map((elem) => {
        return (
          <div>
            <div className="container">
              <span className="apiname" key={elem.id}>
                {elem.name}
              </span>
              <span className="apiname">{elem.username}</span>
              <span className="apiname">{elem.email}</span>
              <span className="apiname">{elem.address.street}</span>
              <span className="apiname">{elem.phone}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
