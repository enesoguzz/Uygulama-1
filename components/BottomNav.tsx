import { Compass, Heart, Map, User } from "lucide-react";
import type { Messages } from "@/lib/messages";

export function BottomNav({ t }: { t: Messages["nav"] }) {
  const items = [
    { label: t.explore, Icon: Compass, current: true },
    { label: t.map, Icon: Map, current: false },
    { label: t.favorites, Icon: Heart, current: false },
    { label: t.account, Icon: User, current: false },
  ];

  return (
    <nav aria-label={t.label} className="sticky bottom-0 grid h-[68px] flex-none grid-cols-4 border-t border-border bg-surface">
      {items.map(({ label, Icon, current }) => (
        <a
          key={label}
          href="#"
          aria-current={current ? "page" : undefined}
          className={
            current
              ? "flex flex-col items-center justify-center gap-1 text-xs font-semibold text-primary"
              : "flex flex-col items-center justify-center gap-1 text-xs font-medium text-muted"
          }
        >
          <Icon aria-hidden="true" size={22} strokeWidth={2} />
          {label}
        </a>
      ))}
    </nav>
  );
}
