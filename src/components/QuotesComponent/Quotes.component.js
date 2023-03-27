import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Quotes.styles.css'
// eslint-disable-next-line
{/* //Todo: Migrate button logic and styling to its own component  */ }
// eslint-disable-next-line
{/* //Todo: This will create re-usable components, keeping to React principles */ }


const Quotes = ({ props }) => {
    let selectRandomQuote = props.selectRandomQuote;
    let selectedQuoteText = props.selectedQuote.text;
    let selectedQuoteAuthor = props.selectedQuote.author;
    let handleTweet = props.handleTweet;
    let quoteClassName = 'quote-text'

    if (selectedQuoteText.length >= 75) {
        quoteClassName = 'long-quote'
    } else quoteClassName = 'quote-text'

    return (
        <div className='quotes-container'>
            {/* //*Quotes */}
            <section className={quoteClassName}>

                <FontAwesomeIcon icon="fa-solid fa-mug-hot" size="2x" />

                <span className='quote'>
                    {selectedQuoteText}
                </span>

            </section>
            {/* //*Author */}
            <section className='quote-author'>
                <span className='author'>{selectedQuoteAuthor}</span>
            </section>
            {/* //*Buttons  */}

            <section className='button-container'>
                <button onClick={handleTweet} className='twitter-button' id='twitter' title='Tweet This!' >
                    <FontAwesomeIcon icon={['fab', 'fa-twitter']} size="xl" />
                </button>
                <button onClick={selectRandomQuote} className='new-quote-button' id='new-quote' title='Get a new quote!'>
                    New Quote
                </button>
            </section>
        </div>

    )
}

export default Quotes