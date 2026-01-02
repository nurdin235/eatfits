"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  const items = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/plans", label: "Plan", icon: "calendar_month" },
    { href: "/shop", label: "Shop", icon: "shopping_cart" },
    { href: "/profile", label: "Profile", icon: "person" },
  ];

  return (
    <nav className="bottom-nav fixed bottom-0 left-0 right-0 z-50 border-t border-dark/10 dark:border-dark/20 bg-surface-light dark:bg-surface-dark px-4 py-2">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        {items.map((it) => {
          const isActive = pathname === it.href || (it.href === "/plans" && pathname?.startsWith("/plans"));
          return (
            <Link 
              key={it.href} 
              href={it.href} 
              className={`flex flex-col items-center gap-1 text-sm transition-colors ${
                isActive 
                  ? "text-primary" 
                  : "text-primary/70 dark:text-primary/70 hover:text-primary"
              }`}
            >
              <span className="material-symbols-outlined text-2xl">{it.icon}</span>
              <span className="text-xs">{it.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
