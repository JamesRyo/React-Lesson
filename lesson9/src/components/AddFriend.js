import React, { Component } from 'react';

export default class AddFriend extends Component {
	state = {
		name: '',
		age: ''
	};
	onChangeInput = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	onSave = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.props.onSave({ name: this.state.name, age: this.state.age });
		this.setState({ name: '', age: '' });
	};
	render() {
		const { name, age } = this.state;
		return (
			<div className="add-friend">
				<h3>Add Friend</h3>
				<form onSubmit={this.onSave}>
					<p>
						<input
							value={name}
							placeholder="name of the friend"
							id="name"
							type="text"
							onChange={this.onChangeInput}
						/>
					</p>
					<p>
						<input
							id="age"
							value={age}
							placeholder="age of the friend"
							type="number"
							onChange={this.onChangeInput}
						/>
					</p>
					<button type="submit">Save</button>
				</form>
			</div>
		);
	}
}
