import React, {useEffect, useState} from 'react';
import './App.scss';
import COLORS_ARRAY  from './colorsArray';
import {FaTwitter} from 'react-icons/fa'

function App() {  
  let quotesDBUrl = 'https://dummyjson.com/quotes'
  
  

 const [ quote, setQuote] = useState("start where you are. Use what you have. Do what you can.")
  const [author, setAuthor] = useState("Arthur Ashe")
const [quotes, setQuotesArray] = useState(null)
const [accentColor, setAccentColor] = useState('#66994D')

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
setAccentColor(COLORS_ARRAY[randomNumber])
}
let myStyle = {
  backgroundColor: accentColor,
  color: accentColor,
  transition: '1s + ease'

}
   
  return (
    <div className="App">
      <header className="App-header" style={myStyle}>
       <div id='quote-box' style={{ color:accentColor}}>
        <p id='text' style={{ color:accentColor}}>
          {quote}
        </p>
         <p id='author' >- {author}</p>
         <div className="buttons" >
          <a id='tweet-quote' style={{backgroundColor:accentColor}} href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)}><FaTwitter/></a>
          
         <button onClick={randomQuotes} id='new-quote' style={{backgroundColor:accentColor}}>
          New quote
          </button>
          </div>
          </div>
      </header>
    </div>
  );
}

export default App;
