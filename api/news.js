const STORIES = [
  {
    id: "austin-weekend-schedule", status: "confirmed", source: "Formula 1",
    kicker: "United States GP · Schedule", title: "Austin race week: the full F1 schedule in IST",
    description: "Round 18 arrives at Circuit of The Americas on 23–25 October. Because Austin is 10 hours 30 minutes behind India during this weekend, two sessions begin after midnight IST.",
    published: "2026-10-22T12:00:00Z", link: "https://www.formula1.com/en/racing/2026/united-states",
    body: [
      "Formula 1 heads to Circuit of The Americas for the United States Grand Prix, Round 18 of the 2026 season. The official schedule lists a standard Grand Prix weekend, with no Sprint session.",
      "Converted from the published Austin local timetable, Practice 1 is Friday 23 October at 23:00 IST. Practice 2 is Saturday 24 October at 02:30 IST; Practice 3 is Saturday 24 October at 23:00 IST; qualifying is Sunday 25 October at 02:30 IST.",
      "The 56-lap Grand Prix starts at 01:30 IST on Monday 26 October. Session times can change, so check the official Formula 1 timetable before the weekend."
    ],
    keyFacts: ["Round 18 · 23–25 October in Austin", "FP1 · Fri 23 Oct · 23:00 IST", "FP2 · Sat 24 Oct · 02:30 IST", "FP3 · Sat 24 Oct · 23:00 IST", "Qualifying · Sun 25 Oct · 02:30 IST", "Race · Mon 26 Oct · 01:30 IST", "5.513 km · 56 laps"],
    context: "The official Formula 1 United States GP page lists Austin local session times. IST conversions add 10 hours 30 minutes to Austin time.",
    whyItMatters: "The time-zone shift means the main qualifying session and Grand Prix both fall on the following calendar day in India.",
    whatNext: "Recheck the official schedule for any changes and update this report after practice and qualifying.", image: ""
  },
  {
    id: "singapore-result-title-watch", status: "confirmed", source: "Formula 1 / FIA",
    kicker: "Singapore · Race report", title: "Verstappen wins Singapore as Antonelli extends title lead",
    description: "Max Verstappen won at Marina Bay ahead of Charles Leclerc and Kimi Antonelli. Antonelli's championship lead over George Russell stands at 102 points.",
    published: "2026-10-11T14:00:00Z",
    link: "https://www.formula1.com/en/latest/article/verstappen-seals-commanding-singapore-grand-prix-victory-from-leclerc-and-antonelli.49wDzysiVqi5cloGjle40A",
    body: [
      "Max Verstappen converted pole position into victory at the Singapore Grand Prix, leading all 62 laps for his first win at Marina Bay and the 73rd Grand Prix victory of his career.",
      "Charles Leclerc finished second, 7.335 seconds behind, while Kimi Antonelli completed the podium in third. Lando Norris and Oscar Piastri finished fourth and fifth.",
      "The result leaves Antonelli on 340 points and Russell on 238 after Round 17. Six rounds remain, beginning with the United States Grand Prix in Austin."
    ],
    keyFacts: ["1 · Max Verstappen", "2 · Charles Leclerc · +7.335s", "3 · Kimi Antonelli · +24.573s", "Antonelli 340 · Russell 238", "Championship gap · 102 points"],
    context: "The race classification and report are published by Formula 1; the FIA also published the final classification on 11 October.",
    whyItMatters: "Verstappen has won consecutive Grands Prix, while Antonelli retains a substantial advantage in the Drivers' Championship.",
    whatNext: "Austin is the next round. Antonelli can mathematically clinch the title there under specific combinations of results, but it is not guaranteed.", image: ""
  },
  {
    id: "antonelli-title-permutations", status: "analysis", source: "SPECTATE desk · Formula 1 points permutations",
    kicker: "Championship · Analysis", title: "What Antonelli needs to clinch the title in Austin",
    description: "A 102-point lead makes a title clinch possible at COTA, but only if the relevant results fall his way. The scenario is a possibility, not a prediction of the outcome.",
    published: "2026-10-13T00:00:00Z",
    link: "https://www.formula1.com/en/latest/article/points-permutations-when-is-the-earliest-antonelli-could-win-world-championship.24UKT2fsQl4GmC5DMrmYUy",
    body: [
      "Formula 1's published points-permutations analysis identifies the United States Grand Prix as the earliest round at which Kimi Antonelli could mathematically secure the Drivers' Championship.",
      "The clinch scenario depends on multiple finishing positions; a strong weekend by Antonelli alone does not guarantee a title. Six rounds remain and a maximum of 150 points is available across those Grands Prix.",
      "SPECTATE's view is deliberately cautious: the points gap gives Antonelli a substantial buffer, but until the race is run the title remains open. This is editorial analysis based on the published standings and points system, not a statistical forecast."
    ],
    keyFacts: ["Antonelli · 340 points", "Russell · 238 points", "Gap · 102 points", "Six rounds remain", "Title clinch in Austin · possible, not guaranteed"],
    context: "The analysis uses the official post-Singapore standings and Formula 1's published points-permutations explainer.",
    whyItMatters: "Austin is not just the next race: it is the earliest possible championship-clinching opportunity for Antonelli.",
    whatNext: "Recalculate the permutations after the official qualifying result and race classification.", image: ""
  },
  {
    id: "racing-bulls-2027-lineup", status: "confirmed", source: "Formula 1",
    kicker: "Driver market · 2027", title: "Racing Bulls says its 2027 driver decision is still open",
    description: "Team principal Alan Permane says the team expects to decide its line-up in the coming weeks, leaving Liam Lawson and Arvid Lindblad in focus.",
    published: "2026-10-11T06:08:00Z",
    link: "https://www.formula1.com/en/latest/article/permane-states-racing-bulls-will-select-their-2027-driver-line-up-in-the-coming-weeks.39Cso2HINAEU5KViOulOZb",
    body: [
      "Racing Bulls team principal Alan Permane has said the team is still working through its 2027 driver decision and expects to make a choice in the coming weeks.",
      "Formula 1's report identifies Liam Lawson and Arvid Lindblad as drivers in focus. The existence of an open decision is confirmed; any claim that a particular driver has secured a seat would go beyond the published information.",
      "SPECTATE will treat future seat claims as speculation unless the team or a driver makes a clear, attributable announcement."
    ],
    keyFacts: ["2027 Racing Bulls line-up · not announced", "Liam Lawson · current driver", "Arvid Lindblad · current driver", "No confirmed seat decision in the cited report"],
    context: "This story summarises a Formula 1 report published on 11 October 2026 and does not infer an outcome.",
    whyItMatters: "The remaining driver-market decisions are a genuine open question as the grid looks toward 2027.",
    whatNext: "Wait for an official team announcement before treating any reported outcome as confirmed.", image: ""
  }
];
export default function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=120, stale-while-revalidate=300");
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json({
    updatedAt: "2026-10-22T12:00:00Z",
    stories: STORIES,
    policy: "Facts automatically. Analysis deliberately. Speculation transparently. Primary sources are Formula1.com, FIA and official team or driver statements."
  });
}
