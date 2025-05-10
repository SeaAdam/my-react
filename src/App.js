import React, { useEffect, useState } from "react";
import './App.css';
import ContactCard from "./ContactCard";

const App = () => {
  const contacts = [
    {
      avatarUrl:"https://placehold.co/150",
      name : "Jenny Han",
      email : "jenny.han@notreal.com",
      age: 29
    },
    {
      avatarUrl:"https://placehold.co/150",
      name : "Paul Jones",
      email : "paul.jones@notreal.com",
      age: 27
    },
    {
      avatarUrl:"https://placehold.co/150",
      name : "Earll Jones",
      email : "earll.jones@notreal.com",
      age: 100
    },
    {
      avatarUrl:"https://placehold.co/150",
      name : "Angel Jones",
      email : "Angel.jones@notreal.com",
      age: 26
    }
 
  ];

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=2")
  .then(response => response.json())
  .then (data => {console.log(data)
    setResults(data.results)
  }); {}
  }, []); 
  


  return(
    <div>
      {results.map((result, index)=>{
        return(
          <ContactCard key={index}
          avatarUrl = {result.picture.large}
          name = {result.name.first}
          email = {result.email}
          age = {result.dob.age}
          />
        )
      })}
    </div>
    
  )
}

export default App; 