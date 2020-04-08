import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuoteOptions from '../QuoteOptions/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './QuoteAndAuthor.scss';

export class QuoteAndAuthor extends Component {
    copyText = React.createRef();

    handleCopy = () => {
      const valueCopy = this.copyText.current.innerText;
    
      let el = document.createElement('textarea');
      el.setAttribute('readonaly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';

      el.value = valueCopy;

      document.body.appendChild(el);
      el.select();

      document.execCommand('copy');
     
      document.body.removeChild(el);
    }

    render() {
        let { quote, author } = this.props;
        return (
            <div className="quote-card">
             <div className="quote-card__content" ref={this.copyText}>
                 <p><FontAwesomeIcon icon={faQuoteLeft}/> {quote}"</p>
                 <p><strong>-{author}</strong></p>
             </div>
             <QuoteOptions 
                 onRefresh={this.props.handleRefresh}
                 onSave={() => this.props.handleSave({quote, author})}
                 onCopy={this.handleCopy}>
             </QuoteOptions>
            </div>
        )
    }
}

QuoteAndAuthor.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default QuoteAndAuthor;
