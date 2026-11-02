import { describe, expect, it } from "vitest";
import { ELECTION_DAY, isElectionDay, shouldShowElectionDay } from "@/lib/electionDay";

describe("Election Day offer rules", () => {
  it("keeps the offer at $5", () => {
    expect(ELECTION_DAY.price).toBe(5);
  });
  it("starts at midnight November 3 in New York, not midnight UTC", () => {
    expect(isElectionDay(new Date("2026-11-03T04:59:59.999Z"))).toBe(false);
    expect(isElectionDay(new Date("2026-11-03T05:00:00Z"))).toBe(true);
  });
  it("includes the last minute and stops at midnight November 4 Eastern", () => {
    expect(isElectionDay(new Date("2026-11-04T04:59:59.999Z"))).toBe(true);
    expect(isElectionDay(new Date("2026-11-04T05:00:00Z"))).toBe(false);
  });
  it("does not display on other days or years", () => {
    expect(isElectionDay(new Date("2026-11-02T12:00:00-05:00"))).toBe(false);
    expect(isElectionDay(new Date("2027-11-03T12:00:00-05:00"))).toBe(false);
  });
  it("shows only once in a session", () => {
    const now = new Date("2026-11-03T12:00:00-05:00");
    expect(shouldShowElectionDay(now, false)).toBe(true);
    expect(shouldShowElectionDay(now, true)).toBe(false);
  });
  it("waits two seconds before showing", () => {
    expect(ELECTION_DAY.delayMs).toBe(2000);
  });
});