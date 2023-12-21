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

	addFriend = (friend) => {
		console.log(friend);
		this.setState({
			friends: this.state.friends.concat([ friend ])
		});
		console.log(this.state.friends);
	};

	deleteFriend = (name) => {
		console.log(`deleting ${name}`);
		this.setState({
			friends: this.state.friends.filter((friend) => friend.name !== name)
		});
	};

	componentDidMount() {
		console.log("component has mounted");
	}

	componentDidUpdate(prevProps, prevState) {
		/* Here we receive previous props and previous state,
			we can compare these with current state and current props
			and perform action based on that if we want */
		console.log('component updated');
		console.log(prevProps, prevState);
	}

	render() {
		return (
			<div className="app">
				<AddFriend onSave={this.addFriend} />

				{this.state.friends.map((friend) => <Person deleteFriend={this.deleteFriend} key={friend.name} name={friend.name} age={friend.age} />)}
			</div>
		);
	}
}

export default App;
