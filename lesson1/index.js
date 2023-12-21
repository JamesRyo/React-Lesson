class App extends React.Component {
  render() {
    return (
      <div className="jumbotron"> {/* You cannot use class to specify CSS classes, you must use className */}
        <h1>Hello Texas</h1> {/* While writing JSX inside render function, remember you can return only one root element here we return div and everything is inside div */}
        <p>{Math.random() * 10}</p> {/* Anything inside curly brace inside JSX is evaluated as Javascript expression */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
