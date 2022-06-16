import React, { useEffect, useState } from "react";
import ToDoList from "./MyCoinList";
import Styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((resopnse) => resopnse.json())
    .then((json) => {
      setCoins(json)
      setLoading(false)
    })
  }, [])
  
  return (
    <div className= {Styles.title}>
      <ToDoList />
      <h1>Coin Type : ({coins.length})</h1>
      <h2>{loading ? <strong>Loading...</strong> : null}</h2>

      <ul>
        {coins.map((coin) => <li>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>)}
      </ul>

    </div>
  );
}
export default App;
