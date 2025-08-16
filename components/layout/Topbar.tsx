"use client";

import WalletConnectButton from "@/components/wallet/WalletConnectButton";

export default function Topbar() {
  return (
    <div className="w-full flex justify-end items-center p-4 bg-gray-900 border-b border-gray-800">
      <WalletConnectButton />
    </div>
  );
}
