"use client";
import React from "react";
import { useAddress } from "@/context/AddressContext";

const Profile = () => {
  const { bech32Address, isConnected } = useAddress();

  return (
    <div className="w-full flex items-center justify-center h-full p-8">
      {bech32Address ? (
        <>
          <div className="border-2 -mt-32 border-primary w-fit rounded-md p-4 flex flex-row gap-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div>Wallet Address</div>
              <div className="break-words text-sm overflow-hidden">{bech32Address}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="border-2  -mt-32 border-primary w-fit rounded-md p-4 flex flex-row gap-4">
            <div className="flex flex-row gap-6">
              <div className="">Wallet Address</div>
              <div>Not Connected</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
