class App extends React.Component {
  state = {
    name: "Damodar"
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Hello Texas</h1>
        <p>Welcome {this.state.name}</p> 
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" />
          <button>Submit</button>
        </form>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
