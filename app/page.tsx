import { BalanceWidget } from "@/components/dashboard/BalanceWidget";
import { SendTokenForm } from "@/components/dashboard/SendTokenForm";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-400">
        Welcome to Greenleafdapp 🌱
      </h2>
      <p className="text-zinc-400">
        Manage your <span className="text-green-300 font-semibold">GLF</span>{" "}
        tokens, stake, play games and explore DeFi.
      </p>

      {/* Balance + Send */}
      <div className="grid gap-6 md:grid-cols-2">
        <BalanceWidget />
        <SendTokenForm />
      </div>
    </div>
  );
}
