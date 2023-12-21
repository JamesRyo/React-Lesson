class App extends React.Component {
    state = {
        movies: ['Dark Phoenix', 'Avengers 4', 'Spiderman Far Away from home', 'Alita: The battle angel']
    }
    render() {
        /* We are */
        let movies = this.state.movies.map(movie=>movie+"!");
        return (
            <div className="jumbotron">
                <h1>Hello Texas</h1>
                <p>Welcome <strong>{this.props.name}</strong></p>

                {/* You can use each array index to render the data, but for this you need to know the exact number of elements in array */}
                <p>Movie list rendered accessing each member of array</p>
                <ul>
                <li>{this.state.movies[0]}</li>
                <li>{this.state.movies[1]}</li>
                <li>{this.state.movies[2]}</li>
                <li>{this.state.movies[3]}</li>
                </ul>
                
                {/*
                    The better way to cycle through data is by using map function, it is used to transform each elements in the array and returns a new array. 
                    Here we are using map function on our movies arrays and returning a list of li elements that displays the movie name and finally rendering the output of our map
                */}
                <p>Movie list rendered using javascript map function</p>
                <ul>
                    {this.state.movies.map(movie => <li>{movie}</li>)}
                </ul>
            </div>
        )
    }
  }

  /* While loading the component as HTML tag, you can pass any number of attributes, like below (name, className, test) and can be named as you please, which will later be accessed in component class in the props object where each attribute passed here will become a key value pair in the props object. */ 
  
  ReactDOM.render(<App name="Damodar Lohani" className="app-content" test="this is test prop" />, document.getElementById('app'));
  