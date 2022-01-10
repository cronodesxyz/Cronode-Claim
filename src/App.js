import './css/styles.css';
import './css/App.css';
import {Wallet} from "./components/wallet";
import {BuyForm} from "./components/mint";
import logo from "./assets/logo.png";


function App() {
  return (
    <div className="App">


      <body>

        <div id="imgContainer">
          <img id="logo" src={logo} alt="Cronodes Logo"/>
        </div>

        <div id="pgContent">

          <p className="warning-text" >Ensure you connect to the same wallet that you sent CRO from in order to claim your CRN!</p>

          <div id="claimBox">
            <p className="Claim-text" >CLAIM YOUR CRN!</p>
            <div className="row row-cols-2">
                <div className="col">
                <Wallet/>
                </div>
                <div className="col">
                    <BuyForm/>
                </div>

            </div>
          </div>
        </div>




    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>

  );
}

export default App;
