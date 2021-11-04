import {utils} from "ethers"
import {CONTRACT_ADDRESS, CONTRACT_API} from "../config"
import Web3 from "web3"
import { useEthers } from '@usedapp/core'


export const BuyForm = () => {

    const {account} = useEthers()
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(CONTRACT_API, CONTRACT_ADDRESS)

    const handleBuySubmit = async () => {

        contract.setProvider(web3.givenProvider)
        const amountInEther = .07
        const transactionValue = utils.parseUnits(amountInEther.toString())

        return contract.methods.mintLilHustlaz(1).send({from: account, value: transactionValue})

    }

    return (
        <div>

            <a onClick={handleBuySubmit} _ngcontent-ivp-c18="" className="button-14-copy w-button">MINT</a>
        </div>
    )

}