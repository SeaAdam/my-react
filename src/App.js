import React from "react";
import './App.css';
import ContactCard from "./ContactCard";

const App = () => {
  const contacts = [
    {
      avatarUrl:"https://placehold.co/150",
      name : "Jenny Han",
      email : "jenny.han@notreal.com",
      age: 25
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
      age: 23
    }
 
  ];


  return(
    <div>
      {contacts.map((contact, index)=>{
        return(
          <ContactCard key={index}
          avatarUrl = {contact.avatarUrl}
          name = {contact.name}
          email = {contact.email}
          age = {contact.age}
          />
        )
      })}
    </div>
    
  )
}

export default App; 