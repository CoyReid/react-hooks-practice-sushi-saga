import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([]);
  const [custWallet, setCustWallet] = useState(150);

  useEffect(() => {
    fetch(API).then(res => res.json()).then((sushis) => {
      const newSushis = sushis.map((sushi) => {
        return {
          ...sushi,
          eaten: false
        }
      })
      setSushis(newSushis)
    })
  }, [])

  const eatenSushi = sushis.filter((sushi) => sushi.eaten)

  function eatSushi(sushiToEat) {
    if(custWallet >= sushiToEat.price) {
      const newSushis = sushis.map((sushi) => {
        if (sushi.id === sushiToEat.id){
          return {
            ...sushi,
            eaten: true
          }
        } else {
          return sushi;
        }
      });
      setSushis(newSushis);
      setCustWallet(custWallet => custWallet - sushiToEat.price)
    } else {
      alert("No free meals! Please grab money from the ATM if you'd like more!")
    }
  }

  function addMoneyToWallet(amount) {
    setCustWallet(custWallet => custWallet + amount)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi}/>
      <Table custWallet={custWallet} plates={eatenSushi} addMoneyToWallet={addMoneyToWallet}/>
    </div>
  );
}

export default App;
