import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";

export function Topbar() {
  return (
    <header className="h-14 px-4 border-b border-zinc-800 flex items-center justify-end bg-black">
      <WalletConnectButton />
    </header>
  );
}
