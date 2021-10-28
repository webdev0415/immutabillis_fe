import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import Web3 from "web3";
import { handleAuthenticationAction, authenticateFailureAction } from "../redux/auth/action"

const welcomeMetaMask =
  'Welcome to Metamask'
const useMetaMaskAuth = (onMetaMaskNotInstalled) => {
    const history = useHistory()
    const dispatch = useDispatch()
  const [accounts, setAccounts] = useState(null);

  const initInstance = async (auth = false) => {
    if (window.ethereum) {
      if (auth) await window.ethereum.enable();
      window.ethereum.on("accountsChanged", setAccounts);
      console.log("window.ethereum", window.ethereum);
      return new Web3(window.ethereum);
    } else if (window.web3) {
      return new Web3(window.currentProvider);
    }
    onMetaMaskNotInstalled();
    return null;
  };

  const handleAuth = async () => {
    const ethereum = await initInstance(true);
    if (!ethereum) return;

    const coinbase = await ethereum.eth.getCoinbase();
    const publicAddress = coinbase.toLowerCase();

    ethereum.eth.personal
      .sign(welcomeMetaMask, publicAddress, "")
      .then((signature) => {
        dispatch(
          handleAuthenticationAction({
            publicAddress,
            signature,
            history,
          })
        )
      })
      .catch((err) => {
        dispatch(authenticateFailureAction(err))
      })
  };

  
  return {
    handleAuth,
  };
};

const web3Instance = () => {
  if (window.ethereum) {
    return new Web3(window.ethereum);
  } else if (window.web3) {
    return new Web3(window.currentProvider);
  }
};

export const getNetworkStatus = async () => {
  const ethereum = await web3Instance();
  if (!ethereum) return false;
  const chainId = await ethereum.eth.getChainId();
  return chainId === 1;
};
export default useMetaMaskAuth;
