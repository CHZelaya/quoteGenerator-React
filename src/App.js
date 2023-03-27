import './App.css';
import { useEffect, useState } from 'react'
import Quotes from './components/QuotesComponent/Quotes.component';
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Login from './components/LoginComponent/Login.component';


library.add(fas, fab, faCoffee)



function App() {
  //* State Management
  const [login, setLogin] = useState(false)
  const [quote, setQuote] = useState([])
  const [selectedQuote, setSelectedQuote] = useState({
    text: "Today is the tomorrow we worried about yesterday.",
    author: "Anonymous",
    tag: "general"
  })


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

  const handleTweet = () => {
    const tweet = `https://twitter.com/intent/tweet?text=${selectedQuote.text} - ${selectedQuote.author}`
    window.open(tweet, '_blank')
  }

  const handleLogin = (event) => {
    event.preventDefault();
    setLogin(true)
    return console.log('click')
  }

  return (
    <div className="App">

      {
        login ? <Quotes props={{ selectedQuote, selectRandomQuote, handleTweet }} />
          :
          <Login props={handleLogin} />
      }


    </div>
  );
}


export default App;
