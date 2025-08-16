import { Chain } from "wagmi/chains";

export const polygonChain: Chain = {
  id: 137,
  name: "Polygon",
  network: "polygon",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://polygon-rpc.com"],
    },
    public: {
      http: ["https://polygon-rpc.com"],
    },
  },
  blockExplorers: {
    default: { name: "PolygonScan", url: "https://polygonscan.com" },
  },
};
