class App extends React.Component {
    /* The html attributes you pass while loading component as tag is received in the props object inside the component class */

    render() {
        console.log(this.props)
        return (
            <div className="jumbotron">
                <h1>Hello Texas</h1>
                <p>Welcome <strong>{this.props.name}</strong></p> {/* so the name attribute you passed as <App name="Damodar" /> will be accessed as this.props.name in the App component class */}
                <p>CSS class is <strong> {this.props.className}</strong></p>
                <p>The value of test prop is <strong>{this.props.test}</strong></p>
            </div>
        )
    }
  }

  /* While loading the component as HTML tag, you can pass any number of attributes, like below (name, className, test) and can be named as you please, which will later be accessed in component class in the props object where each attribute passed here will become a key value pair in the props object. */ 
  
  ReactDOM.render(<App name="Damodar Lohani" className="app-content" test="this is test prop" />, document.getElementById('app'));
  