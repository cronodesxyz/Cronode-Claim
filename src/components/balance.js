

export const Balance = () => {


    const main = document.getElementById("main");


    const totalsupply = fetch("https://deep-index.moralis.io/api/v2/nft/0xB80a06EA0f4D17DD7D4b584DAA483C760331137B?chain=eth&format=decimal&order=DESC",
     {headers: {'X-API-Key': 'T7d37JqEbexjZRNh2S1uuDRmEvW6f7hmipNPyKrp6P4paJU6G35vuecqMHR0K21A'}})
    totalsupply.then((response) => {return response.json();}).then((total) => {const value = total.total; main.innerHTML = value;});





    return (


        <div >
             <h1 _ngcontent-ivp-c18=""   className="heading-78-copy-copy">/10000</h1>

        </div>

            )

}