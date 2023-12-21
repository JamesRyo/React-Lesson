import React, { Component } from 'react';

export class AddForm extends Component {
	state = {
		content: ''
	};
	handleChange = (e) => {
		this.setState({ content: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
        console.log(this.state);
        this.props.addTodo({
            ...this.state, //spreading object with spread operator ...
            id: Math.random()
        });
        this.setState({content: ''});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Add todo</label>
					<input value={this.state.content} type="text" onChange={this.handleChange} />
				</form>
			</div>
		);
	}
}

export default AddForm;
