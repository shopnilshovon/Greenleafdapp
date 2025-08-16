"use client";

import { useAccount, useBalance } from "wagmi";
import { GLF_TOKEN } from "@/lib/tokens";

export default function BalanceWidget() {
  const { address } = useAccount();

  const { data, isLoading } = useBalance({
    address,
    token: GLF_TOKEN.address as `0x${string}`,
    watch: true, // রিয়েলটাইম আপডেট
  });

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800">
      <h2 className="text-xl font-bold mb-2">Wallet Balance</h2>
      {isLoading ? (
        <p className="text-gray-400">Loading...</p>
      ) : data ? (
        <p className="text-green-400 text-2xl font-semibold">
          {data.formatted} {GLF_TOKEN.symbol}
        </p>
      ) : (
        <p className="text-gray-500">Connect wallet to see balance</p>
      )}
    </div>
  );
}
