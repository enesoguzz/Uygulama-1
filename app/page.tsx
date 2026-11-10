import { CalendarCheck, House, Images, ShieldCheck, User } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { SearchForm } from "@/components/SearchForm";
import { getMessages } from "@/lib/messages";
import { popularRegions } from "@/lib/regions";

export default function HomePage() {
  const t = getMessages();
  const features = [
    { ...t.home.features.licensed, Icon: ShieldCheck },
    { ...t.home.features.photos, Icon: Images },
    { ...t.home.features.fresh, Icon: CalendarCheck },
  ];

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col bg-bg">
      <header className="flex items-center justify-between px-5 pt-[18px]">
        <div className="flex items-center gap-2.5">
          <div className="flex size-[34px] items-center justify-center rounded-[10px] bg-primary text-white">
            <House aria-hidden="true" size={20} strokeWidth={2} />
          </div>
          <span className="font-heading text-xl font-extrabold tracking-[-0.02em]">{t.brand}</span>
        </div>
        <a
          href="#"
          aria-label={t.home.account}
          className="flex size-11 items-center justify-center rounded-full border border-border bg-surface text-text"
        >
          <User aria-hidden="true" size={20} strokeWidth={2} />
        </a>
      </header>

      <main className="flex flex-1 flex-col gap-5 px-5 pt-6 pb-7">
        <div>
          <p className="mb-2 text-[13px] font-semibold text-primary">{t.home.region}</p>
          <h1 className="font-heading text-[30px] leading-[1.15] font-extrabold tracking-[-0.02em]">{t.home.title}</h1>
          <p className="mt-2.5 text-[15px] leading-normal text-text-secondary">{t.home.subtitle}</p>
        </div>

        <SearchForm t={t.home} />

        <section className="flex flex-col gap-2.5">
          <h2 className="text-[15px] font-semibold">{t.home.popularRegions}</h2>
          <div className="flex gap-2 overflow-x-auto">
            {popularRegions.map((region) => (
              <a
                key={region}
                href="#"
                className="flex h-9 flex-none items-center rounded-full border border-border bg-surface px-3.5 text-sm font-medium text-text"
              >
                {region}
              </a>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3.5">
          {features.map(({ title, text, Icon }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="flex size-9 flex-none items-center justify-center rounded-[10px] bg-primary-soft text-primary">
                <Icon aria-hidden="true" size={18} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-0.5 text-[13px] text-muted">{text}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <BottomNav t={t.nav} />
    </div>
  );
}
