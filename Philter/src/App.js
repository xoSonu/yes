import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Manufec from './components/Manufec';
import { Link } from 'react-router-dom';
import Product from "./components/Product";
import AddProduct from "./components/AddProduct"; 
import Footer from "./components/Footer";
import Dist from "./components/Dist";
import AddDist from "./components/AddDist";
import TrackProduct from "./components/TrackProduct";
import TrackDist from "./components/TrackDist";
import Analytics from "./components/Analytics";
import React, { useEffect, useState } from "react";
// import Metamask from "./components/Metamask";
import { Wallet, ethers } from "ethers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import AssetTracker from "./utils/AssetTracker.json";
import { LogDescription } from "ethers/lib/utils";
import logo from "./components/images/Logo1.png"

const CONTRACT_ADDRESS = "0xc9De35C63baBd6E84f9DeA1d8C9c3bdd01f41b09";
library.add(fas);

// function App() {
//   // return (
//   //   <div className="App">
      
//   //     <Router>

//   //       <Header />
//   //       <Routes >
//   //         <Route index element={<Metamask />} />
//   //         <Route path='manufec' element={<Manufec /> } />
//   //         <Route path="product" element={<Product />} />
//   //         <Route path="addProduct"  element={<AddProduct />} />
//   //         <Route path="distributor" element={<Dist />} />
//   //         <Route path="addDistributor" element={<AddDist />} />
//   //         <Route path="trackProduct" element={<TrackProduct />} />
//   //         <Route path="trackDistributor" element={<TrackDist />} />
//   //         <Route path="analytics" element={<Analytics />} />
//   //       </Routes>
//   //       <Footer />
//   //     </Router>
//   //   </div>
//   // );
//   const [currentAccount, setCurrentAccount] = useState("");
//   const [wallet, setWallet] = useState("Please Connect Your Wallet to Proceed");
//   const [contract, setContract] = useState(null);

//   const checkIfWalletIsConnected = async () => {
//     const { ethereum } = window;

//     if (!ethereum) {
//       console.log("Make sure you have Metamask!");
//       return;
//     } else {
//       console.log("We have the ethereum object", ethereum);
//     }

//     const accounts = await ethereum.request({ method: "eth_accounts" });

//     if (accounts.length !== 0) {
//       const account = accounts[0];

//       console.log("Found an authorized account:", account);
//       setWallet("Connected");

//       setCurrentAccount(account);

//       const provider = new ethers.providers.Web3Provider(ethereum);
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(
//         CONTRACT_ADDRESS,
//         AssetTracker.abi,
//         signer
//       );
//       console.log("contract", contract);
//       setContract(contract);
//     } else {
//       console.log("No authorized account found");
//     }
//   };

//   const connectWallet = async () => {
//     try {
//       const { ethereum } = window;

//       if (!ethereum) {
//         alert("Get Metamask!");
//         return;
//       }

//       const accounts = await ethereum.request({
//         method: "eth_requestAccounts",
//       });

//       console.log("Connected", accounts[0]);

//       setWallet("Connected");

//       setCurrentAccount(accounts[0]);
//       const provider = new ethers.providers.Web3Provider(ethereum);
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(
//         CONTRACT_ADDRESS,
//         AssetTracker.abi,
//         signer
//       );
//       setContract(contract);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     checkIfWalletIsConnected();
//   }, []);

//   return (
//     // <div>
//     //   {wallet !== "Connected" ? 
//     //   (
//     //     <button onClick={connectWallet}>Connect to Metamask</button>
//     //   ) : (
//     //     <Link to="/manufec">Connection Established Succesfully. Click here to proceed</Link>
//     //   )}
//     // </div>

//     <div className="App">
//     {/* {contract( */}
//         <Router>
//         <Header />
//         <Routes >
//           <Route index element={<Metamask/>} />
//           <Route path='manufec' element={<Manufec contract={contract} account={currentAccount}/> } />
//           <Route path="product" element={<Product contract={contract} account={currentAccount} />} />
//           <Route path="addProduct"  element={<AddProduct contract={contract} account={currentAccount} />} />
//           <Route path="distributor" element={<Dist contract={contract} account={currentAccount} />} />
//           <Route path="addDistributor" element={<AddDist contract={contract} account={currentAccount} />} />
//           <Route path="trackProduct" element={<TrackProduct contract={contract} account={currentAccount}/>} />
//           <Route path="trackDistributor" element={<TrackDist contract={contract} account={currentAccount}/>} />
//           <Route path="analytics" element={<Analytics contract={contract} account={currentAccount}/>} />
//         </Routes>
//         <Footer />
//       </Router>
//     {/* )}  */}
//   </div>
//   );
// }
// export default App;
const App = () => {
  //console.log(process.env.REACT_APP_WALLET_ADD);
  const [currentAccount, setCurrentAccount] = useState("");
  const [wallet, setWallet] = useState("Please Connect Your Wallet to Proceed");
  const [contract, setContract] = useState(null);

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];

      console.log("Found an authorized account:", account);
      setWallet("Connected");

      setCurrentAccount(account);

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        AssetTracker.abi,
        signer
      );
      console.log("contract", contract);
      setContract(contract);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);

      setWallet("Connected");

      setCurrentAccount(accounts[0]);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        AssetTracker.abi,
        signer
      );
      setContract(contract);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      {contract ? (
        <Router>
                <Header />
                 <Routes >
                   {/* <Route index element={<Metamask/>} /> */}
                   <Route path='manufec' element={<Manufec /> } />
                   <Route path="product" element={<Product contract={contract} account={currentAccount} />} /> 
                   <Route path="addProduct"  element={<AddProduct contract={contract} account={currentAccount} />} />
                   <Route path="distributor" element={<Dist contract={contract} account={currentAccount} />} />
                   <Route path="addDistributor" element={<AddDist contract={contract} account={currentAccount} />} />
                   <Route path="trackProduct" element={<TrackProduct contract={contract} account={currentAccount}/>} />
                   <Route path="trackDistributor" element={<TrackDist contract={contract} account={currentAccount}/>} />
                   <Route path="analytics" element={<Analytics contract={contract} account={currentAccount}/>} />
                 </Routes>
                 <Footer />
               </Router>
      ) : (
        <div>
            <div className="bg">
              <div className="connectWalletContainer">
            {/* <div className="connectWalletContainer">
              {wallet == "Please Connect Your Wallet to Proceed" && (
                <button onClick={connectWallet} className="connectWalletBtn">
                  <img
                    src={
                      // "https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
                      logo
                    }
                    className="img"
                  />{" "}
                  {wallet}
                </button>
              )}

            </div> */}
            <div className="container">
            <img src={logo} alt="XYZ"/>
            {/* {! isWalletConnected ? ( */}
            <button type="button" className="btn btn-primary btn-small" onClick={connectWallet}>Connect To MetaMask</button>
            {/* ) : (
             <>
            <p>Account is connected</p>
            <button>Click to proceed</button>
             </> 
           
            )} */}
            </div>
               <div className='container2'>
                <h1>SIGN IN</h1>
                <h2 className='text'>
                  PHILTER
                  </h2> 
             <br/>
             <p className="description">Don't risk it, <span className="philter">Philter</span> it: The only <br/>fake product validator you need!</p>           
            </div>
          </div>
        </div>
       </div> 
      )}
    </>
  );
};
export default App;


