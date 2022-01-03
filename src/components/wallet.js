import { useEthers } from '@usedapp/core'

export const Wallet = () => {

    const { activateBrowserWallet, account, deactivate } = useEthers()
    const isConnected = account !== undefined

    const handleActiveSubmit = () => {
        activateBrowserWallet()
        const main = document.getElementById("main");


    const totalsupply = fetch('https://deep-index.moralis.io/api/v2/nft/0xB80a06EA0f4D17DD7D4b584DAA483C760331137B?chain=eth&format=decimal&order=DESC',
     {headers: {'X-API-Key': 'T7d37JqEbexjZRNh2S1uuDRmEvW6f7hmipNPyKrp6P4paJU6G35vuecqMHR0K21A'}})
    totalsupply.then((response) => {return response.json();}).then((total) => {const value = total.total; main.innerHTML = value;});


    }


    return (


        <div className="mintButton">
          {isConnected ? (
                    <button  className="button-14-copy" href="#header" onClick={deactivate}>
                        Disconnect
                    </button>
                    ) : (
                        <button  className="button-14-copy" href="#header" onClick={handleActiveSubmit}>
                        Connect
                        </button>
                    )
                }
        </div>
      )
}