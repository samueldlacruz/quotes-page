import React, { Component } from 'react';
import './QuoteOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faCopy } from '@fortawesome/free-solid-svg-icons';

export class QuoteOptions extends Component {
    render() {
        return (
        <div className="quote-options">
         <button className="quote-btn" onClick={this.props.onRefresh}>
            <FontAwesomeIcon icon={faRedo} />
         </button>
         <button className="quote-btn" onClick={this.props.onCopy}>
            <FontAwesomeIcon icon={faCopy} />
         </button>
        </div>
        )
    }
}

export default QuoteOptions;
