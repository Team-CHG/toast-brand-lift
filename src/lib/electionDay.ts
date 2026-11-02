export const ELECTION_DAY = {
  price: 5,
  headline: "$5 Classic Breakfast.",
  subhead: "Tuesday, 11/3 only, at every Toast! All Day, including Savannah.",
  button: "Find Your Toast",
  destination: "/locations",
  timeZone: "America/New_York",
  // Eastern Standard Time is in effect after November 1, 2026.
  start: "2026-11-03T00:00:00-05:00",
  endExclusive: "2026-11-04T00:00:00-05:00",
  delayMs: 2000,
  sessionKey: "toast-election-day-2026-shown",
} as const;

export function isElectionDay(now: Date): boolean {
  const time = now.getTime();
  return time >= Date.parse(ELECTION_DAY.start) && time < Date.parse(ELECTION_DAY.endExclusive);
}

export function shouldShowElectionDay(now: Date, alreadyShown: boolean): boolean {
  return !alreadyShown && isElectionDay(now);
}