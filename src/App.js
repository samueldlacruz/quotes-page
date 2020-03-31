 import React, { Component } from 'react';
import QuoteAndAuthor from './components/QuoteAndAuthor/';
import SwitcherTheme from './components/SwitcherTheme/';
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

  render(){
  return (
    <React.Fragment>
    <div className="container">
    <h1 className="title">Blessed Quotes App</h1>
     <SwitcherTheme></SwitcherTheme>
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
