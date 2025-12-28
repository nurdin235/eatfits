import Link from "next/link";

export default function BottomNav() {
  const items = [
    { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { href: "/plans", label: "My Plans", icon: "calendar_month" },
    { href: "/browse/dishes", label: "Browse Dishes", icon: "restaurant_menu" },
    { href: "/browse/meals", label: "Browse Meals", icon: "restaurant" },
  ];

  return (
    <nav className="bottom-nav fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100 dark:border-gray-800 bg-surface-light dark:bg-surface-dark px-4 py-2">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="flex flex-col items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-primary">
            <span className="material-symbols-outlined text-2xl">{it.icon}</span>
            <span className="text-xs">{it.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
