import {CONTRACT_ADDRESS, CONTRACT_API} from "../config"
import Web3 from "web3"
import { useEthers } from '@usedapp/core'



export const BuyForm = () => {

    const {account} = useEthers()
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(CONTRACT_API, CONTRACT_ADDRESS)


    const handleBuySubmit = async () => {
        if(account){
            var amount = await contract.methods.price().call()
            const htmlamount = document.getElementById('number').innerHTML;

            contract.setProvider(web3.givenProvider)
            const amountInEther = amount * htmlamount
            const baseGasFee = htmlamount * 200000


            return contract.methods.mintLilHustlaz(htmlamount).send({from: account, value: amountInEther, gas: baseGasFee})
            }else {
            alert("Not connected")
        }
    }

    return (
        <div>
        <h1 _ngcontent-ivp-c18=""  className="heading-78 lilhustlaz-quantity"><button _ngcontent-ivp-c18="" className="qty-adj minus">-</button> <span  type="num" id="number" className="qty">1</span> <button _ngcontent-ivp-c18="" className="qty-adj plus">+</button></h1>

            <a onClick={handleBuySubmit} _ngcontent-ivp-c18="" href="#header" className="button-14-copy mint-button">Mint</a>
        </div>
    )

}