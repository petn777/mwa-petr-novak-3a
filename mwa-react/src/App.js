import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ContentItem from './ContentItem';

function App() {

  const [count, setCount] = useState(0);






  return (
    <div className="App">
      <header className="App-header">
        <p>Text</p>
        <p>Hodnota počtu: {count}</p>

        <div>
          <button onClick={()=> {
          
          console.log("User click");
          setCount(count+1);          
          
          }}>Pričti</button>
        </div>

        <div>
          <ContentItem text = "Hoj"/>
        </div>
      </header>
    </div>
  );
}


export default App;
