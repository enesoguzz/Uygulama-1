import tr from "@/messages/tr.json";

export type Messages = typeof tr;
export type Locale = "tr";

export const defaultLocale: Locale = "tr";

const catalogs: Record<Locale, Messages> = { tr };

/** Arayüz metinlerini döndürür. Yeni dil eklenince `catalogs` içine eklenir. */
export function getMessages(locale: Locale = defaultLocale): Messages {
  return catalogs[locale];
}
