import React, { Component } from 'react'

export default class TodoDetails extends Component {
  render() {
    return (
      <div>
        Details Page
        <p> ID: {this.props.match.params.todoId}</p>
      </div>
    )
  }
}
