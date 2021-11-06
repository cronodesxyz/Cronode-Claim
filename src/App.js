import './css/styles.css';
import './css/App.css';
import {Wallet} from "./components/wallet";
import {BuyForm} from "./components/mint";


function App() {
  return (
    <div className="App">


      <body>

        <div className="section-31 wf-section" id="header">

            <div className="div-block-83 outer">
                <Wallet/>
                <h1 _ngcontent-ivp-c18=""  className="heading-78-copy-copy"><span id="main"></span><span>/10000</span></h1>


                <a href="#header" className="link-block-7 w-inline-block w--current"><img src="https://cdn.shopify.com/s/files/1/0560/5693/8695/files/2_3b390ddd-7caf-43bb-9e60-78f67625163a.png?v=1634188326" loading="lazy" width="194" sizes="194px" srcset="https://cdn.shopify.com/s/files/1/0560/5693/8695/files/2_3b390ddd-7caf-43bb-9e60-78f67625163a.png?v=1634188326 500w, https://cdn.shopify.com/s/files/1/0560/5693/8695/files/2_3b390ddd-7caf-43bb-9e60-78f67625163a.png?v=1634188326 1200w" alt=""/></a>
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
