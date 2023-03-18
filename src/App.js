import React, {useEffect, useState} from 'react';
import './App.scss';
import COLORS_ARRAY  from './colorsArray';
import {FaTwitter} from 'react-icons/fa'

function App() {  
  let quotesDBUrl = 'https://dummyjson.com/quotes'
  
  

 const [ quote, setQuote] = useState("start where you are. Use what you have. Do what you can.")
  const [author, setAuthor] = useState("Arthur Ashe")
const [quotes, setQuotesArray] = useState(null)
// const [accentColor, setAccentColor] = useState('#66994D')
const [currentColor, setCurrentColor] = useState('#66994D');
  const [previousColor, setPreviousColor] = useState(null);

const fetchQuotes = async(url) =>{
  const response =  await fetch(url)
  const parsedJSON = await response.json()
 setQuotesArray(parsedJSON.quotes)}
useEffect(()=>{
 fetchQuotes(quotesDBUrl)
 }
,[quotesDBUrl])


const randomQuotes = () => {
let randomNumber = Math.floor(quotes.length * Math.random())
setQuote(quotes[randomNumber].quote)
setAuthor(quotes[randomNumber].author)
setPreviousColor(currentColor);
setCurrentColor(COLORS_ARRAY[randomNumber]);
}

   
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          background: currentColor,
          color: currentColor,
          transition: 'background 1s linear, color 1s linear',
          animation:
            previousColor !== null
              ? 'colorChange 1s forwards'
              : 'none',
        }}
      >
       <div id='quote-box' style={{  color: currentColor}}>
        <p id='text' style={{  color: currentColor}}>
          {quote}
        </p>
         <p id='author' >- {author}</p>
         <div className="buttons" >
          <a id='tweet-quote' style={{backgroundColor: currentColor}} href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)}><FaTwitter/></a>
          
         <button onClick={randomQuotes} id='new-quote' style={{backgroundColor: currentColor}}>
          New quote
          </button>
          </div>
          </div>
      </header>
    </div>
  );
}

export default App;
