"use client";

import { useState } from "react";

export function BalanceWidget() {
  // এখন শুধু ডেমো ব্যালেন্স
  const [balance] = useState("1250.45");

  return (
    <div className="bg-zinc-900 rounded-xl p-6 shadow-md border border-zinc-800">
      <h3 className="text-lg font-semibold mb-2">Wallet Balance</h3>
      <p className="text-3xl font-bold text-green-400">{balance} GLF</p>
      <p className="text-sm text-zinc-400 mt-1">on Polygon Network</p>
    </div>
  );
}
