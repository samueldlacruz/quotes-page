 import React, { Component } from 'react';
import QuoteAndAuthor from './components/QuoteAndAuthor/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import quotes from './data/quotes';
import './App.css';

class  App extends Component{
  state = {
    quote: '',
    author: ''
  }

  componentDidMount() {
    this.refreshQuote();
  }
  
  randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }; 

  shuffleQuotes = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  refreshQuote = () => {
     const selectRandomQuote = this.randomQuote();
     this.setState({
        quote: selectRandomQuote.quote,
        author: selectRandomQuote.author
     });
     this.shuffleQuotes(quotes);
  }; 

  handleTheme = () => {
    const body = document.body;

    if (body.classList.contains('light')) {
      body.classList.replace('light', 'dark');
    } else {
      body.classList.replace('dark', 'light');
    }
    
  }

  render(){
  return (
    <React.Fragment>
    <div className="container">
    <h1 className="title">Blessed Quotes App</h1>
      <button onClick={this.handleTheme}>
        <FontAwesomeIcon icon={faMoon} />Dark Mode
      </button>
      <QuoteAndAuthor 
        handleRefresh={this.refreshQuote}
        handleCopy={this.copyQuote}
        {...this.state}>
      </QuoteAndAuthor>
    </div>
    </React.Fragment>
  );
  }
}

export default App;
