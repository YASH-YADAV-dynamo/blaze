"use client";
import React, { useState } from "react";
import CustomSidebar from "@/components/dashboard/Sidebar";
import { cn } from "@/utils";
import { Button } from "@burnt-labs/ui";
import { AddressProvider } from "@/context/AddressContext";

// Wallet types
type WalletType = 'metamask' | 'phantom' | null;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<WalletType>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Truncate address for display
  const truncateAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  // MetaMask Connection
  const connectMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        
        setAddress(accounts[0]);
        setIsConnected(true);
        setSelectedWallet('metamask');
        setIsConnecting(false);
      } catch (error) {
        console.error("MetaMask connection error:", error);
        alert("MetaMask connection failed");
        setIsConnecting(false);
      }
    } else {
      alert("MetaMask is not installed");
      window.open('https://metamask.io/download.html', '_blank');
    }
  };

  // Phantom Wallet Connection
  const connectPhantomWallet = async () => {
    if ((window as any).solana && (window as any).solana.isPhantom) {
      try {
        const resp = await (window as any).solana.connect();
        setAddress(resp.publicKey.toString());
        setIsConnected(true);
        setSelectedWallet('phantom');
        setIsConnecting(false);
      } catch (err) {
        console.error("Phantom connection error:", err);
        alert("Phantom wallet connection failed");
        setIsConnecting(false);
      }
    } else {
      alert("Phantom wallet is not installed");
      window.open('https://phantom.app/download', '_blank');
    }
  };

  // Disconnect Wallet
  const disconnectWallet = () => {
    if (selectedWallet === 'metamask') {
      // MetaMask disconnect
      setIsConnected(false);
      setAddress(null);
      setSelectedWallet(null);
    } else if (selectedWallet === 'phantom') {
      // Phantom disconnect
      (window as any).solana.disconnect();
      setIsConnected(false);
      setAddress(null);
      setSelectedWallet(null);
    }
  };

  return (
    <AddressProvider value={{ 
      bech32Address: address, 
      isConnected, 
      isConnecting 
    }}>
      <div
        className={cn(
          "flex flex-col md:flex-row bg-[#0A0A0A] dark:bg-neutral-800 w-screen flex-1",
          "h-screen"
        )}
      >
        <CustomSidebar open={open} setOpen={setOpen} />
        <div className="flex flex-1 h-screen w-full">
          <div className="h-screen dark:border-neutral-700 bg-[#0A0A0A] dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full">
            <div className="flex pt-3 pb-1 px-8 justify-end space-x-4 items-center">
              {!isConnected ? (
                <>
                  <Button
                    onClick={connectMetaMask}
                    structure="outlined"
                    className="w-1/2"
                  >
                    Connect MetaMask
                  </Button>
                  <Button
                    onClick={connectPhantomWallet}
                    structure="outlined"
                    className="w-1/2"
                  >
                    Connect Phantom
                  </Button>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <div className="text-white bg-gray-700 px-3 py-2 rounded-md">
                    {truncateAddress(address!)}
                  </div>
                  <Button
                    onClick={disconnectWallet}
                    structure="outlined"
                  >
                    Disconnect
                  </Button>
                </div>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </AddressProvider>
  );
}