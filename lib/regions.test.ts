import { describe, expect, it } from "vitest";
import { buildSearchParams } from "./regions";

describe("buildSearchParams", () => {
  it("yurt türünü Türkçe parametreye çevirir", () => {
    expect(buildSearchParams({ gender: "female" })).toBe("tur=kiz");
    expect(buildSearchParams({ gender: "male" })).toBe("tur=erkek");
  });

  it("boş aramayı eklemez, dolu aramayı kırparak ekler", () => {
    expect(buildSearchParams({ gender: "female", query: "   " })).toBe("tur=kiz");
    expect(buildSearchParams({ gender: "male", query: " Beşiktaş " })).toBe("tur=erkek&q=Be%C5%9Fikta%C5%9F");
  });
});
