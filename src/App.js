import React from 'react';
import Cards from './Components/Cards'
import { ArrowBackIosIcon, ArrowForwardIosIcon, CachedRoundedIcon } from '@material-ui/icons';
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state =
    {
      isLoading: false,
      jokesList: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch(" https://official-joke-api.appspot.com/jokes/programming/ten")
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          jokesList: data
        })
      })
  }

  render() {
    let jokes = this.state.jokesList.map(joke => {
      return <Cards key={joke.id} jokesList={joke} />;
    });
    return (
      <React.Fragment>
        <div className="cards">{jokes}</div>
      </React.Fragment>
    )
  };
}

export default App;
