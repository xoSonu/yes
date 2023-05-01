import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AssetTracker from "../utils/AssetTracker.json";
import { ethers } from "ethers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import Header from './components/Header';
import Header from './Header';
// import Manufec from './components/Manufec';
// import Product from "./components/Product";
import Product from './Product';
import Manufec from './Manufec';
// import AddProduct from "./components/AddProduct"; 
import AddProduct from './AddProduct';
// import Footer from "./components/Footer";
import Footer from './Footer';
// import Dist from "./components/Dist";
import Dist from './Dist';
// import AddDist from "./components/AddDist";
import AddDist from './AddDist';
// import TrackProduct from "./components/TrackProduct";
import TrackProduct from './TrackProduct';
// import TrackDist from "./components/TrackDist";
import TrackDist from './TrackDist';
// import Analytics from "./components/Analytics";
import Analytics from './Analytics';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const CONTRACT_ADDRESS = "0xE3df8310532d88f6337f61C166446d2672BFe3fa";

// library.add(fas);


// function Metamask() {
//     // const [currentAccount, setCurrentAccount] = useState("");
//    const [wallet, setWallet] = useState("Please Connect Your Wallet to Proceed");
    // const [contract, setContract] = useState(null);
  
    // const checkIfWalletIsConnected = async () => {
    //   const { ethereum } = window;
  
    //   if (!ethereum) {
    //     console.log("Make sure you have Metamask!");
    //     return;
    //   } else {
    //     console.log("We have the ethereum object", ethereum);
    //   }
  
    //   const accounts = await ethereum.request({ method: "eth_accounts" });
  
    //   if (accounts.length !== 0) {
    //     const account = accounts[0];
  
    //     console.log("Found an authorized account:", account);
    //     setWallet("Connected");
  
    //     setCurrentAccount(account);
  
    //     const provider = new ethers.providers.Web3Provider(ethereum);
    //     const signer = provider.getSigner();
    //     const contract = new ethers.Contract(
    //       CONTRACT_ADDRESS,
    //       AssetTracker.abi,
    //       signer
    //     );
    //     console.log("contract", contract);
    //     setContract(contract);
    //   } else {
    //     console.log("No authorized account found");
    //   }
    // };
  
    // const connectWallet = async () => {
    //   try {
    //     const { ethereum } = window;
  
    //     if (!ethereum) {
    //       alert("Get Metamask!");
    //       return;
    //     }
      
    //     const accounts = await ethereum.request({
    //       method: "eth_requestAccounts",
    //     });
  
    //     console.log("Connected", accounts[0]);
  
    //     setWallet("Connected");
  
    //     setCurrentAccount(accounts[0]);
    //     const provider = new ethers.providers.Web3Provider(ethereum);
    //     const signer = provider.getSigner();
    //     const contract = new ethers.Contract(
    //       CONTRACT_ADDRESS,
    //       AssetTracker.abi,
    //       signer
    //     );
    //     setContract(contract);
    // d
    // useEffect(() => {
    //   checkIfWalletIsConnected();
    // }, []);
  
//     return (
//       <div>
//         {wallet !== "Connected" ? 
//         (
//           <button onClick={connectWallet}>Connect to Metamask</button>
//         ) : (
//           <Link to="/manufec">Connection Established Succesfully. Click here to proceed</Link>
//         )}
//       </div>
//     //   <div className="App">
//     //   {contract(
//     //       <Router>
//     //       <Header />
//     //       <Routes >
//     //         <Route index element={<Metamask account={currentAccount}/>} />
//     //         <Route path='manufec' element={<Manufec contract={contract} account={currentAccount}/> } />
//     //         <Route path="product" element={<Product contract={contract} account={currentAccount} />} />
//     //         <Route path="addProduct"  element={<AddProduct contract={contract} account={currentAccount} />} />
//     //         <Route path="distributor" element={<Dist contract={contract} account={currentAccount} />} />
//     //         <Route path="addDistributor" element={<AddDist contract={contract} account={currentAccount} />} />
//     //         <Route path="trackProduct" element={<TrackProduct contract={contract} account={currentAccount}/>} />
//     //         <Route path="trackDistributor" element={<TrackDist contract={contract} account={currentAccount}/>} />
//     //         <Route path="analytics" element={<Analytics contract={contract} account={currentAccount}/>} />
//     //       </Routes>
//     //       <Footer />
//     //     </Router>
//     //   )} 
//     // </div>
//     );
// }
// export default Metamask;
// import React, { useContext } from 'react'
// import Logo from "./images/Logo1.png";
// import "./ConnectPage.css";
// import { mmWalletConnected, getEtheriumContract,connectWallet }  from '../contractfunc';
// import { useState, useEffect} from 'react'
// // import { ethers } from "./dist/ethers.min.js";
// // import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.min.js";
// export default function ConnectPage() 
// {

//   const [isWalletConnected, setisWalletConnected] = useState(false)
//   const[isWalletAddress,setWalletAddress]=useState("")

//   const connectmm=()=>
//   {
//     const value=connectWallet();
//     // Pehle value check krni , isme true ana lazmi ha 
//     // if (value)
//     // {
//     //   setisWalletConnected(true);
//     // }
//   }
  
//   useEffect(() => {
//     // To get the value instead of javascript promise object
//     async function run() 
//     { 
//       const data = await mmWalletConnected();
//       setWalletAddress(data);
//       if( data !== '0x000000000000000000000000')
//       {
//         setisWalletConnected(true);
//         console.log(isWalletConnected);
//         return ;
//       }
//         setisWalletConnected(false);
//         console.log(isWalletConnected);
//     }

//     const timer = setInterval(() => 
//     {
//       run();
//     }, 1000)

//     return () => clearInterval(timer)
//   })

//   return (
//     <div className='bg'>
//         <div className="container">
//             <img src={Logo} alt="XYZ"/>
//             {! isWalletConnected ? (
//             <button type="button" className="btn btn-secondary" onClick={connectmm}>Connect To MetaMask</button>
//             ) : (
//              <>
//             <p>Account is connected</p>
//             <button>Click to proceed</button>
//              </> 
           
//             )}
//         </div>
//         <div className='container2'>
//         <h1>Sign In to</h1>
//             <h2 className='text'>
//             PHILTER
//             </h2> 
//             <br/>
//             <p className="description">Don't risk it, <span className="philter">Philter</span> it: The only <br/>fake product validator you need!</p>           
//         </div>
       
//     </div>
//   );
// }

