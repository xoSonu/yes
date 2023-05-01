// import abi from "./contracts/FakePI.json"
// import { ethers } from 'ethers';

// const { ethereum } = window
// // ADD YOUR CONTRACT ADDRESS BELOW !!!
// const contractAddress = '0xE3df8310532d88f6337f61C166446d2672BFe3fa'
// const contractAbi = abi.abi

// // const getEtheriumContract = () => {
// //     const provider = new ethers.providers.Web3Provider(ethereum)
// //     const signer = provider.getSigner()
// //     const contract = new ethers.Contract(contractAddress, contractAbi, signer)
// //     return contract
// // }

// const mmWalletConnected = async () => {
//     if (!ethereum) return alert('Please install Metamask')
//     const accounts = await ethereum.request({ method: 'eth_accounts' })

//     if (accounts.length) {
//       return accounts[0]
//     } else {
//       console.log('No accounts found.')
//       return '0x000000000000000000000000'
//     }
// }
// const connectWallet = async () => {
//     try {
//       if (!ethereum) return alert('Please install Metamask')
//       const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
//       console.log('account connected', accounts[0])
//       // return(true)
//       return accounts[0]
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   export
//    {
//     // getEtheriumContract,
//     mmWalletConnected,
//     connectWallet,
//   }
 