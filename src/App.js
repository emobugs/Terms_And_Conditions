import "./App.css";
import Document from "./Document";
import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState(null);
  const [isOnBottom, setIsOnBottom] = useState(false);

  // change isOnBottom state accordingly scroll 
  const handleScroll = (e) => {
    // set isOnBottom to true every time if once is scrolled to bottom
    if(isOnBottom){
      return true;
    }
    setIsOnBottom( Math.abs(
              e.scrollHeight - e.clientHeight - e.scrollTop
              ) < 1)
  }

  // set lorem ipsum text initially
  useEffect(() => {
    function getData() {
      fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
      .then(response => response.text())
      .then(response => setText(response));
    } getData();
  }, []);

  return (
    <div className="App">
    <Document title="Terms and Conditions" content={text} 
      handleScroll={handleScroll}
      />
     <button disabled={!isOnBottom ? true : false}>I Agree</button>
    </div>
  );
}

export default App;
