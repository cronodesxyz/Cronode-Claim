import './css/styles.css';
import './css/App.css';
import {Wallet} from "./components/wallet";
import {BuyForm} from "./components/mint";
import logo from "./assets/LH.png";


function App() {
  return (
    <div className="App">


      <body>

        <div className="section-31 wf-section" id="header">


            <div className="div-block-83 outer">


                <Wallet/>
                <h1 _ngcontent-ivp-c18=""  className="heading-78-copy-copy"><span id="main"></span><span>/10000</span></h1>
                <a href="#header" className="link-block-7 w-inline-block  w--current"><img className="logo-image" src={logo} width="130" height="75"  alt="LH"/></a>

                <app-root _nghost-ivp-c18="" ng-version="9.0.7"><div _ngcontent-ivp-c18="" className="div-block-83 inner">
                <h1 _ngcontent-ivp-c18="" className="heading-78-copy">mint a hustla</h1>

                    <h1 _ngcontent-ivp-c18="" className="heading-78-copy-copy">Select how many you would like to mint!</h1>
                    <BuyForm/></div><router-outlet _ngcontent-ivp-c18=""></router-outlet></app-root>

            </div>

        </div>



    </body>
    </div>
  );
}

export default App;
