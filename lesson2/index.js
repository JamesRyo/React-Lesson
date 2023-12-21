class App extends React.Component {
  /* Just declare a class property called state as a Javascript Object to define a state of the component */
  state = {
    showLoader: false,
    name: "Damodar"
  }
  render() {
    return (
      <div className="jumbotron">
        <h1>Hello Texas</h1>
        <p>Welcome {this.state.name}</p> {/**Displaying state values in UI */}

        { this.state.showLoader &&
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div> } {/** Only display loader if the state.showLoader property is true */}
        <br />
        <button onClick={()=>this.setState({showLoader: !this.state.showLoader})}>Toggle loader</button> {/**Update state based on user interaction */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
