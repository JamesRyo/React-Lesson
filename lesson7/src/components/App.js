import React, { Component } from 'react';
import './App.css';
import Person from './Person';

const App  = () => {
  const friends = [
    {name: "Ramesh", age: 18},
    {name: "Suresh", age: 20},
    {name: "Mahesh", age: 19},
    {name: "Assesh", age: 22},
    {name: "Akhilesh", age: 24}
  ]
  return (
    <div className="app" >
      {friends.map(friend => <Person key={friend.name} name={friend.name} age={friend.age} />)}
    </div>
  );

}

export default App;
