import { useEthers } from '@usedapp/core'

export const Wallet = () => {

    const { activateBrowserWallet, account, deactivate } = useEthers()
    const isConnected = account !== undefined

    const handleActiveSubmit = () => {
        activateBrowserWallet()
    }


    return (


        <div className="mintButton">
          {isConnected ? (
                    <button  className="button-14-copy" href="#header" onClick={deactivate}>
                        disconnect
                    </button>
                    ) : (
                        <button  className="button-14-copy" href="#header" onClick={handleActiveSubmit}>
                        connect
                        </button>
                    )
                }
        </div>
      )
}