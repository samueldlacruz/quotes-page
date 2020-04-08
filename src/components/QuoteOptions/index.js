import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faCopy } from '@fortawesome/free-solid-svg-icons';
import './QuoteOptions.scss';

const QuoteOptions = ({ onRefresh, onCopy }) => {

    return (
    <div className="quote-options">
        <button className="quote-options__button" onClick={onRefresh}>
        <FontAwesomeIcon icon={faRedo} />
        </button>
        <button className="quote-options__button" onClick={onCopy}>
        <FontAwesomeIcon icon={faCopy} />
        </button>
    </div>
    )
};

QuoteOptions.propTypes = {
    onRefresh: PropTypes.func.isRequired,
    onCopy: PropTypes.func.isRequired
}

export default QuoteOptions;
