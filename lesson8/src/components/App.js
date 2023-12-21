import React, { Component } from 'react';
import './App.css';
import Person from './Person';
import AddFriend from './AddFriend';

class App extends Component {
	state = {
		friends: [
			{ name: 'Ramesh', age: 18 },
			{ name: 'Suresh', age: 20 },
			{ name: 'Mahesh', age: 19 },
			{ name: 'Assesh', age: 22 },
			{ name: 'Akhilesh', age: 24 }
		]
  };
  
  addFriend = ( friend ) => {
    console.log(friend);
    this.setState({
      friends: this.state.friends.concat([friend])
    })
    console.log(this.state.friends);
  }

  render() {
		return (
			<div className="app">
        <AddFriend onSave={this.addFriend} />

        {this.state.friends.map((friend) => <Person key={friend.name} name={friend.name} age={friend.age} />)}
        
			</div>
		);
	}
}

export default App;
