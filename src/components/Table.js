import React from "react";
import Atm from "./Atm";

function Table({ custWallet, plates = [], addMoneyToWallet }) {

  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${custWallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
      <Atm addMoneyToWallet={addMoneyToWallet}/>
    </>
  );
}

export default Table;
