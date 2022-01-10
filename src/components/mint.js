import {CONTRACT_ADDRESS, CONTRACT_API} from "../config"
import Web3 from "web3"
import { useEthers } from '@usedapp/core'



export const BuyForm = () => {

    const {account} = useEthers()
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(CONTRACT_API, CONTRACT_ADDRESS)


    const handleBuySubmit = async () => {
        if(account){



            return contract.methods.claim().send({from: account})
            }else {
            alert("Not connected")
        }
    }

    return (
        <div>


            <button onClick={handleBuySubmit} href="#header" className="claim-button">Claim</button>
        </div>
    )

}