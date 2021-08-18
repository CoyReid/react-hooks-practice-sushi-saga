import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatSushi}) {
  
  const [currentSushi, setCurrentSushi] = useState(0);

  const sushiToShow = sushis.slice(currentSushi, currentSushi + 4).map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi}/>
  })

  function addFourSushi() {
    if(currentSushi >= 96) {
      setCurrentSushi(currentSushi => currentSushi - 96)
    } else {
      setCurrentSushi(currentSushi => currentSushi + 4)
    }
  }
  
  return (
    <div className="belt">
      {sushiToShow}
      <MoreButton addFourSushi={addFourSushi}/>
    </div>
  );
}

export default SushiContainer;
