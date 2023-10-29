"use client";

import Web3 from "web3";
import { useState } from "react";

function WalletAdd() {
  const [connectedAddress, setConnectedAddress] = useState<
    string | undefined
  >();
  const [web3, setWeb3] = useState<Web3 | undefined>();

  const connectWallet = async (): Promise<void> => {
    try {
      if (!web3) {
        // Initialize Web3 instance
        const provider = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const newWeb3 = new Web3(provider);
        setWeb3(newWeb3);
      }

      // Get accounts and set connected address
      const accounts = await web3.eth.getAccounts();
      setConnectedAddress(accounts[0]);
      console.log("Connected with address:", connectedAddress);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {connectedAddress && <p>Connected with address: {connectedAddress}</p>}
    </div>
  );
}
