import {useState} from "react"

export default function Atm({addMoneyToWallet}){
    
    const [bankCash, setBankCash] = useState(0);

    function withdrawCash(e) {
        e.preventDefault();
        addMoneyToWallet(bankCash)
        setBankCash(0)
    }

    function setWithdrawAmount(e) {
        const cashToGrab = parseInt(e.target.value);
        setBankCash(cashToGrab)
    }
    
    return (
        <div id="atm">
            <img src="https://freepngimg.com/thumb/atm/27181-7-atm-machine-transparent-thumb.png" alt="atm at a sushi restaurant"/>
            <form id="atmForm" onSubmit={withdrawCash}>
                <input type="number" value={bankCash} onChange={setWithdrawAmount}/>
                <br/>
                <button type="submit">Withdraw Cash</button>
            </form>
        </div>
    )
}