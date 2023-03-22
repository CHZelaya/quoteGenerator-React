import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Quotes.styles.css'


const Quotes = ({ props }) => {
    let selectRandomQuote = props.selectRandomQuote;
    let selectedQuote = props.selectedQuote;
    console.log('Quote component:', selectedQuote);
    return (
        <div className='quotes-container'>
            {/* //*Quotes */}
            <section className='quote-text'>

                <FontAwesomeIcon icon="fa-solid fa-mug-hot" size="2x" />

                <span className='quote'>
                    {selectedQuote.text}
                </span>

            </section>
            {/* //*Author */}
            <section className='quote-author'>
                <span className='author'>{selectedQuote.author}</span>
            </section>
            {/* //*Buttons  */}
            {/* //Todo: Migrate button logic and styling to its own component  */}
            {/* //Todo: This will create re-usable components, keeping to React principles */}
            <section className='button-container'>
                <button className='twitter-button' id='twitter' title='Tweet This!' >
                    <FontAwesomeIcon icon={['fab', 'fa-twitter']} size="xl" />
                </button>
                <button onClick={selectRandomQuote} id='new-quote' title='Get a new quote!'>
                    New Quote
                </button>

            </section>
        </div>

    )
}

export default Quotes