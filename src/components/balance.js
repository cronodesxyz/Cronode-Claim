import { useEtherBalance, useEthers} from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { CONTRACT_ADDRESS, CONTRACT_API} from '../config'
import Web3 from "web3"


export const Balance = () => {
    const etherBalance = useEtherBalance(CONTRACT_ADDRESS)

    const main = document.getElementById("main");


    const totalsupply = fetch("https://deep-index.moralis.io/api/v2/nft/0x6aD4Ff63fD7CF6672eE33Cdad8e3EE14Bad52B4E?chain=rinkeby&format=decimal&order=DESC",
     {headers: {'X-API-Key': 'T7d37JqEbexjZRNh2S1uuDRmEvW6f7hmipNPyKrp6P4paJU6G35vuecqMHR0K21A'}})
    totalsupply.then((response) => {return response.json();}).then((total) => {const value = total.total; main.innerHTML = value;});





    return (


        <div id="main">
             <h1 _ngcontent-ivp-c18=""   className="heading-78-copy-copy">/10000</h1>

        </div>

            )

}