"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden absolute top-4 left-4 z-50 text-white"
      >
        <Menu size={28} />
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:static inset-y-0 left-0 w-64 bg-zinc-900 shadow-lg flex flex-col p-4 transition-transform z-40",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold text-green-400">Greenleafdapp</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-green-500 text-black"
                  : "text-zinc-300 hover:bg-zinc-800"
              )}
              onClick={() => setOpen(false)}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="mt-auto flex gap-4 justify-center">
          <a href="https://t.me/yourchannel" target="_blank">
            <img src="/social/telegram.svg" alt="Telegram" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank">
            <img src="/social/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </aside>
    </>
  );
}
