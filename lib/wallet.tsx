"use client";

import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { ReactNode } from "react";

// Polygon + Public RPC provider
const { chains, publicClient } = configureChains(
  [polygon],
  [publicProvider()]
);

// শুধুমাত্র MetaMask connector
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
});

export function WalletProvider({ children }: { children: ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}