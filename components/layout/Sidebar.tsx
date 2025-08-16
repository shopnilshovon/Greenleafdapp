"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

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
      <motion.aside
        initial={{ x: -260 }}
        animate={{ x: open ? 0 : -260 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed md:static inset-y-0 left-0 w-64 bg-zinc-900 shadow-lg flex flex-col p-4 z-40",
          "md:translate-x-0"
        )}
      >
        {/* Logo / Title */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold text-green-400">Greenleafdapp</h1>
        </div>

        {/* Navigation Items */}
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
              onClick={() => setOpen(false)} // mobile এ click করলে sidebar close হবে
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="mt-auto flex gap-4 justify-center">
          <a
            href="https://t.me/GreenLeafDapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/social/telegram.svg"
              alt="Telegram"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://x.com/GreenLeafDApp?t=w_-U2qu-rjmmyR3jFjhR1g&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/social/twitter.svg"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
        </div>
      </motion.aside>
    </>
  );
}
