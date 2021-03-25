import Web3 from 'web3';
import { walletAbi }  from './abis/abis';

const getWeb3 = () => {
    return new Web3('http://localhost:9545');
   /* return new Promise((resolve, reject) => {
        window.addEventListener('load', async () => {
        if(window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try{
                await window.ethereum.send('eth_requestAccounts'); //ethereum.enable()
                resolve(web3);
            } catch(error) {
                reject(error);
            }
        } else if(window.web3) {
            resolve(window.web3);
        } else {
            reject('Must install Metamask');
        }
    });
});*/
}

const getWallet = async web3 => {
 
   /* const networkId = await web3.eth.net.getId();
    const deployedNetwork = await Wallet.networks[networkId];
    return new web3.eth.Contract(
        Wallet.abi,
        deployedNetwork && deployedNetwork.address
    );
*/
const contractAddr = '0x54EA87d2F3973e44Edf84695840e347376906c40';
return new web3.eth.Contract( walletAbi, contractAddr)


};

export { getWeb3, getWallet };

