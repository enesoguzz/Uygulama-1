/** İlk bölge: İstanbul Avrupa Yakası. İleride veritabanından gelecek. */
export const popularRegions = ["Beşiktaş", "Şişli", "Fatih", "Sarıyer", "Avcılar"] as const;

export type DormGender = "female" | "male";

/** Arama formundaki değerleri liste sayfasının sorgu parametrelerine çevirir. */
export function buildSearchParams(input: { gender: DormGender; query?: string }): string {
  const params = new URLSearchParams({ tur: input.gender === "female" ? "kiz" : "erkek" });
  const query = input.query?.trim();
  if (query) params.set("q", query);
  return params.toString();
}
