import "./globals.css";
import { WalletProvider } from "@/lib/wallet";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export const metadata = {
  title: "Greenleafdapp",
  description: "Decentralized App on Polygon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-950 text-white">
        <WalletProvider>
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Topbar />
            <main className="flex-1 p-4">{children}</main>
          </div>
        </WalletProvider>
      </body>
    </html>
  );
}
