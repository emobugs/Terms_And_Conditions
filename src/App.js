import "./App.css";
import Document from "./Document";
import { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState(null);
  const [isOnBottom, setIsOnBottom] = useState(false);

  const handleScroll = (e) => {
    if(isOnBottom){
      return true;
    }
    setIsOnBottom( Math.abs(
              e.scrollHeight - e.clientHeight - e.scrollTop
              ) < 1)
  }

  useEffect(() => {
    isOnBottom === true ? console.log('bottom') : console.log('noo');
    console.log(isOnBottom);
  }, [isOnBottom])

  // set lorem ipsum text initially
  useEffect(() => {
    fetchLorem();
  }, []);
  
  // fetch lorem ipsum
  const fetchLorem = () => {
    fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
      .then(data => data.text())
      .then(data => setText(data));
  }

  return (
    <div className="App">

      <Document title="Terms and Conditions" content={text} 
      handleScroll={handleScroll}
      />
      {isOnBottom && <button>I Agree</button>}
    </div>
  );
}

export default App;
