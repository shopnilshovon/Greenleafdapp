"use client";

import { useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork } from "wagmi";
import { metaMaskConnector } from "wagmi/connectors/metaMask";
import { polygon } from "wagmi/chains";

export default function ConnectButton() {
  const { connect, isLoading, pendingConnector } = useConnect({
    connector: metaMaskConnector({ chains: [polygon] }),
  });
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  // ✅ যদি অন্য network এ থাকে, polygon এ switch করার option দেখাবে
  if (isConnected && chain?.id !== polygon.id) {
    return (
      <div className="p-3 border rounded-xl bg-red-100">
        <p className="mb-2 text-red-700">
          Wrong network! Please switch to Polygon.
        </p>
        <button
          onClick={() => switchNetwork?.(polygon.id)}
          className="px-4 py-2 bg-purple-600 text-white rounded-xl"
        >
          Switch to Polygon
        </button>
      </div>
    );
  }

  // ✅ Connected হলে address দেখাবে
  if (isConnected) {
    return (
      <div className="p-3 border rounded-xl bg-green-100">
        <p className="text-green-700 mb-2">Connected: {address?.slice(0, 6)}...{address?.slice(-4)}</p>
        <button
          onClick={() => disconnect()}
          className="px-4 py-2 bg-red-600 text-white rounded-xl"
        >
          Disconnect
        </button>
      </div>
    );
  }

  // ✅ Connect না থাকলে button দেখাবে
  return (
    <button
      disabled={isLoading}
      onClick={() => connect()}
      className="px-4 py-2 bg-blue-600 text-white rounded-xl"
    >
      {isLoading ? `Connecting...` : "Connect MetaMask"}
    </button>
  );
}