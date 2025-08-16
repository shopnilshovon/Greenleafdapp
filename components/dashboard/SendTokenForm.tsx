"use client";

import { useState } from "react";

export function SendTokenForm() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`(Demo) Sending ${amount} GLF to ${to}`);
  }

  return (
    <div className="bg-zinc-900 rounded-xl p-6 shadow-md border border-zinc-800">
      <h3 className="text-lg font-semibold mb-4">Send GLF</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-zinc-400">Recipient Address</label>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="0x..."
            className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-400">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            type="number"
            className="w-full mt-1 p-2 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
