'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';

type Web3ContextType = {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  walletAddress: string | null;
  isConnected: boolean;
  provider: ethers.providers.Web3Provider | null;
};

const Web3Context = createContext<Web3ContextType>({
  connectWallet: async () => {},
  disconnectWallet: () => {},
  walletAddress: null,
  isConnected: false,
  provider: null,
});

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  const connectWallet = async () => {
    const ethereum = (await detectEthereumProvider()) as any;
    if (!ethereum) {
      alert('Please install MetaMask or another Ethereum wallet!');
      return;
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
      const web3Provider = new ethers.providers.Web3Provider(ethereum);
      setProvider(web3Provider);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setProvider(null);
  };

  useEffect(() => {
    const checkConnection = async () => {
      const ethereum = (await detectEthereumProvider()) as any;
      if (ethereum && ethereum.selectedAddress) {
        setWalletAddress(ethereum.selectedAddress);
        const web3Provider = new ethers.providers.Web3Provider(ethereum);
        setProvider(web3Provider);
      }
    };

    checkConnection();
  }, []);

  return (
    <Web3Context.Provider
      value={{ connectWallet, disconnectWallet, walletAddress, isConnected: !!walletAddress, provider }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);