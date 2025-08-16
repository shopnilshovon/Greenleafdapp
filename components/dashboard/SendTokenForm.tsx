"use client";

import { useState } from "react";
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseUnits } from "viem";
import { GLF_TOKEN } from "@/lib/tokens";

export default function SendTokenForm() {
  const { address } = useAccount();
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [hash, setHash] = useState<`0x${string}` | null>(null);

  const { data, isPending, sendTransaction } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!to || !amount) return;

    try {
      // GLF = ERC20 টোকেন, তাই সরাসরি sendTransaction কাজ করবে না।
      // ERC20 transfer function এর জন্য data encode করতে হবে।
      const erc20Interface = [
        "function transfer(address to, uint amount) returns (bool)",
      ];

      // viem / ethers দিয়ে encode data
      const { encodeFunctionData } = await import("viem");
      const data = encodeFunctionData({
        abi: erc20Interface,
        functionName: "transfer",
        args: [to, parseUnits(amount, GLF_TOKEN.decimals)],
      });

      sendTransaction(
        {
          to: GLF_TOKEN.address as `0x${string}`,
          data,
        },
        {
          onSuccess: (tx) => setHash(tx),
        }
      );
    } catch (err) {
      console.error("Send error:", err);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800">
      <h2 className="text-xl font-bold mb-4">Send GLF</h2>
      <form onSubmit={handleSend} className="space-y-4">
        <input
          type="text"
          placeholder="Recipient address (0x...)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
          required
        />
        <input
          type="number"
          placeholder="Amount (GLF)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
          required
        />

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition"
        >
          {isPending ? "Sending..." : "Send"}
        </button>
      </form>

      {/* ট্রানজেকশন স্ট্যাটাস */}
      {isConfirming && (
        <p className="mt-3 text-yellow-400">Waiting for confirmation...</p>
      )}
      {isSuccess && (
        <p className="mt-3 text-green-400">
          ✅ Transaction confirmed! Hash: {hash}
        </p>
      )}
    </div>
  );
}
