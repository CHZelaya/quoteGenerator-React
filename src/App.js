import './App.css';
import { useEffect, useState } from 'react'
import Quotes from './components/QuotesComponent/Quotes.component';
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(fas, fab, faCoffee)



function App() {
  //* State Management
  const [quote, setQuote] = useState([])
  const [selectedQuote, setSelectedQuote] = useState({})


  //* Api call
  useEffect(() => {
    const handleApiCall = async () => {
      let response = await fetch('https://jacintodesign.github.io/quotes-api/data/quotes.json')
      let data = await response.json();
      return setQuote(data);
    }

    handleApiCall();
  }, [])


  const selectRandomQuote = () => {
    let min = Math.ceil(0);
    let max = Math.floor(8000);

    const number = Math.floor(Math.random() * (max - min) + min);
    const selectedQuote = quote[number];
    return setSelectedQuote(selectedQuote);

  }

  return (
    <div className="App">
      <Quotes props={{ selectedQuote, selectRandomQuote }} />
    </div>
  );
}

export default App;
