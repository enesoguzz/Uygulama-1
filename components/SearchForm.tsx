"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import type { Messages } from "@/lib/messages";
import { buildSearchParams, type DormGender } from "@/lib/regions";

export function SearchForm({ t }: { t: Messages["home"] }) {
  const [gender, setGender] = useState<DormGender>("female");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const options: { id: DormGender; label: string }[] = [
    { id: "female", label: t.female },
    { id: "male", label: t.male },
  ];

  return (
    <form
      className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4"
      onSubmit={(event) => {
        event.preventDefault();
        // Liste sayfası gelince: router.push(`/yurtlar?${buildSearchParams({ gender, query })}`)
        window.history.replaceState(null, "", `?${buildSearchParams({ gender, query })}`);
        setSubmitted(true);
      }}
    >
      <div role="group" aria-label={t.dormType} className="grid grid-cols-2 gap-1.5 rounded-xl bg-subtle p-1">
        {options.map((option) => {
          const selected = option.id === gender;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setGender(option.id)}
              className={
                selected
                  ? "h-10 cursor-pointer rounded-[9px] bg-surface text-sm font-semibold text-ink shadow-[0_1px_2px_rgba(16,24,40,0.12)]"
                  : "h-10 cursor-pointer rounded-[9px] text-sm font-medium text-text-secondary"
              }
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="q" className="text-[13px] font-semibold text-text">
          {t.searchLabel}
        </label>
        <div className="flex h-[50px] items-center gap-2.5 rounded-xl border border-border-strong px-3.5 text-muted focus-within:border-primary">
          <Search aria-hidden="true" size={18} strokeWidth={2} />
          <input
            id="q"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
            className="min-w-0 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
          />
        </div>
      </div>

      <button
        type="submit"
        className="flex h-[50px] cursor-pointer items-center justify-center rounded-xl bg-primary text-[15px] font-semibold text-white hover:bg-primary-hover"
      >
        {t.submit}
      </button>

      {submitted && (
        <p role="status" className="m-0 rounded-[10px] bg-primary-soft px-3 py-2.5 text-[13px] text-primary">
          {t.comingSoon}
        </p>
      )}
    </form>
  );
}
