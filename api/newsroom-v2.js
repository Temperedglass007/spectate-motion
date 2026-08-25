const STORIES = [
  {
    id: 'norris-zandvoort', status: 'confirmed', section: 'Race file', source: 'Reuters', sourceUrl: 'https://www.reuters.com/sports/formula1/norris-wins-dutch-gp-complete-mclaren-hat-trick-2026-08-23/',
    published: '2026-08-23T15:16:00Z',
    title: 'Norris wins again — but Antonelli leaves Zandvoort stronger',
    standfirst: 'The result was McLaren’s second straight win, but Mercedes still walked away with a bigger championship cushion.',
    body: [
      'Lando Norris won the Dutch Grand Prix for the second time in a row, recovering the lead from Kimi Antonelli after the restart and taking the chequered flag ahead of the two Mercedes cars.',
      'Antonelli finished second and extended his championship advantage to 59 points. George Russell completed the podium after Mercedes asked him to give way to his team-mate on fresher tyres late in the race.',
      'The important SPECTATE read is therefore more nuanced than a simple winner story: McLaren has momentum, but Mercedes continues to bank heavy points even on weekends where it is not the outright fastest package.',
      'Ferrari finished fourth and fifth, while Liam Lawson took seventh for Red Bull after stepping into the car for the injured Isack Hadjar. Zandvoort was also the final scheduled Dutch Grand Prix at the circuit.'
    ],
    facts: ['Norris P1', 'Antonelli P2', 'Russell P3', 'Antonelli leads by 59 points', 'Ferrari P4 and P5'],
    why: 'Norris has closed the psychological gap, but the championship arithmetic still favours Antonelli heavily.',
    next: 'Monza becomes the next pressure point, especially with Antonelli carrying a grid penalty into the weekend.'
  },
  {
    id: 'hamilton-ferrari-radio', status: 'confirmed', section: 'Inside the paddock', source: 'Reuters', sourceUrl: 'https://www.reuters.com/sports/formula1/hamilton-accepts-sarcastic-radio-messages-did-not-show-him-best-light-2026-08-25/',
    published: '2026-08-25T09:00:00Z',
    title: 'Hamilton owns the radio frustration — Ferrari still has an execution problem',
    standfirst: 'Hamilton has acknowledged that his Dutch GP radio messages were not his best moment. The bigger issue for Ferrari is why the situation became so frustrating in the first place.',
    body: [
      'Lewis Hamilton has accepted responsibility for the tone of his sarcastic radio messages during the Dutch Grand Prix, after becoming frustrated while running behind Charles Leclerc.',
      'The incident matters because it was not simply a driver outburst. Ferrari was trying to manage two different strategies while Mercedes was able to make a clean team-order call between Antonelli and Russell later in the race.',
      'Hamilton finished fourth and Leclerc fifth. Ferrari had enough race pace to threaten the podium, but the team did not convert that pace into a trophy, leaving execution as the more useful question heading into Monza.',
      'SPECTATE’s view: the radio drama is the visible part of the story. The underlying issue is whether Ferrari can make quicker, clearer decisions when both cars are fighting for the same position.'
    ],
    facts: ['Hamilton P4', 'Leclerc P5', 'Hamilton later accepted the radio criticism', 'Ferrari missed the podium'],
    why: 'Ferrari is close enough to the front that small strategy delays now have a direct points cost.',
    next: 'Monza will show whether the team can turn its Zandvoort race pace into cleaner execution.'
  },
  {
    id: 'cadillac-not-for-sale', status: 'confirmed', section: 'Business of F1', source: 'Reuters', sourceUrl: 'https://www.reuters.com/sports/formula1/twg-global-says-cadillac-f1-team-motorsport-interests-not-sale-2026-08-20/',
    published: '2026-08-20T16:00:00Z',
    title: 'Cadillac is not for sale — and that matters more than the rumour',
    standfirst: 'TWG Global has publicly rejected speculation around its motorsport holdings, including the new Cadillac F1 team.',
    body: [
      'TWG Global has stated that its motorsport properties, including Cadillac’s Formula 1 operation, are not for sale. The statement came after speculation around the wider ownership group intensified.',
      'For a new team, ownership stability is not background noise. Cadillac is still building its technical and organisational structure, and a change at the top would have created another layer of uncertainty while the team is trying to establish itself on the grid.',
      'The team has already changed team principal, with Marcin Budkowski replacing Graeme Lowdon. That makes the ownership clarification particularly relevant: the leadership change should not be confused with an ownership exit.',
      'SPECTATE will keep this in the confirmed column unless new evidence changes the position.'
    ],
    facts: ['TWG says Cadillac is not for sale', 'Cadillac is a new F1 entrant', 'Marcin Budkowski replaced Graeme Lowdon'],
    why: 'A stable ownership structure gives Cadillac a clearer runway to build its long-term F1 project.',
    next: 'The next meaningful signals are technical progress, staffing and on-track performance rather than ownership speculation.'
  },
  {
    id: 'tsunoda-return', status: 'confirmed', section: 'Driver file', source: 'Reuters', sourceUrl: 'https://www.reuters.com/sports/formula1/tsunoda-was-beach-when-he-got-f1-comeback-call-2026-08-20/',
    published: '2026-08-24T12:00:00Z',
    title: 'Tsunoda got the call from a beach. His next move is the real story.',
    standfirst: 'A surprise return at Zandvoort gave Yuki Tsunoda a fresh F1 audition — without automatically creating a contract.',
    body: [
      'Yuki Tsunoda was called back into the F1 field unexpectedly after Isack Hadjar’s injury forced Red Bull and Racing Bulls to reshuffle their drivers for the Dutch weekend.',
      'Tsunoda finished 11th for Racing Bulls. That result did not produce points, but it gave him a weekend in the current-generation car and a chance to show that he remains a viable option in a crowded driver market.',
      'The distinction matters: a good substitute appearance is evidence, not a contract. There is no confirmed 2027 seat attached to this story.',
      'The timing is useful for Tsunoda because several 2027 seats remain unresolved, particularly in the midfield.'
    ],
    facts: ['Tsunoda returned at Zandvoort', 'Finished P11', 'No 2027 seat confirmed', 'Hadjar injury triggered the reshuffle'],
    why: 'Driver markets move on evidence. A clean F1 weekend can materially improve a driver’s negotiating position even without immediate points.',
    next: 'Watch Haas, Racing Bulls and other midfield seats for confirmed moves rather than assuming the comeback itself guarantees one.'
  },
  {
    id: 'alonso-2027', status: 'speculation', section: 'Rumour ledger', source: 'The Race', sourceUrl: 'https://www.the-race.com/formula-1/what-next-for-f1s-driver-market-after-verstappens-new-deal/',
    published: '2026-08-21T09:00:00Z',
    title: 'Alonso has not made the 2027 call yet',
    standfirst: 'The open question is not simply whether Aston Martin wants him. It is whether Alonso still sees enough competitive upside to commit.',
    body: [
      'Fernando Alonso remains one of the biggest unresolved pieces of the 2027 market. The Race reports that he has deferred a decision after previously indicating that the summer break could be the point when he made the call.',
      'Alonso’s own comments point to a wider calculation: his motivation, Aston Martin’s competitiveness and what Lawrence Stroll and Adrian Newey want from the next phase of the project.',
      'That makes this a genuine rumour story rather than a fake transfer headline. The confirmed fact is that no final 2027 decision has been announced. Everything beyond that is scenario-building.',
      'The most credible path remains an Aston Martin extension if the team’s 2027 potential looks convincing, but retirement or a different racing programme cannot be ruled out from the information currently available.'
    ],
    facts: ['No final 2027 decision announced', 'Aston Martin remains central', 'Competitive outlook is a key variable', 'Speculation — not a done deal'],
    why: 'Alonso’s decision could open one of the most significant remaining seats and trigger movement through the midfield.',
    next: 'Look for Alonso’s own comments and direct Aston Martin confirmation. Treat anonymous “deal done” claims as noise until backed up.'
  },
  {
    id: 'haas-2027', status: 'speculation', section: 'Rumour ledger', source: 'The Race', sourceUrl: 'https://www.the-race.com/formula-1/what-next-for-f1s-driver-market-after-verstappens-new-deal/',
    published: '2026-08-21T10:00:00Z',
    title: 'Haas has a real 2027 decision to make',
    standfirst: 'Ocon is still in the conversation, but Fornaroli and Câmara are among the younger names with credible pathways into the seat.',
    body: [
      'Esteban Ocon’s future at Haas remains unresolved. The Race reports that an option exists for 2027, but the team is taking a patient approach while evaluating its alternatives.',
      'Leonardo Fornaroli is one of the most credible candidates. The reigning Formula 2 champion impressed Haas during a previous-car test and has an arrangement that could allow a loan from McLaren if Haas chooses to pursue him.',
      'Rafael Câmara is another name in the conversation. Ferrari is pushing for its junior to get an opportunity, although Ferrari does not control Haas’s decision.',
      'None of this is a confirmed signing. The useful story is the structure of the competition for the seat: an experienced F1 driver trying to retain it versus highly rated juniors trying to take it.'
    ],
    facts: ['Ocon remains unresolved', 'Fornaroli is a serious contender', 'Câmara is also in the mix', 'No Haas 2027 signing confirmed'],
    why: 'Haas is one of the seats where a single decision could bring a new generation of drivers into F1.',
    next: 'Watch Ocon’s performance, Haas statements and any confirmed test or contract announcements.'
  },
  {
    id: 'red-bull-second-seat', status: 'speculation', section: 'Rumour ledger', source: 'The Race', sourceUrl: 'https://www.the-race.com/formula-1/what-next-for-f1s-driver-market-after-verstappens-new-deal/',
    published: '2026-08-21T11:00:00Z',
    title: 'Red Bull’s real 2027 problem is no longer Verstappen',
    standfirst: 'With Verstappen locked in through 2030, attention moves to Hadjar, Lawson, Lindblad and F2 leader Tsolov inside the Red Bull system.',
    body: [
      'Max Verstappen’s new Red Bull deal has removed the biggest uncertainty from the top of the driver market. The more interesting question now sits underneath him.',
      'The Race identifies several competing claims on the Red Bull driver programme: Isack Hadjar is on course to remain, Liam Lawson has produced a useful stand-in performance, Arvid Lindblad is already in F1 and Nikola Tsolov is pushing strongly in Formula 2.',
      'That creates a genuine selection problem. Red Bull can either reward the drivers already performing in F1 or accelerate a junior who is forcing the issue with results below it.',
      'This is speculation because no 2027 line-up has been announced beyond Verstappen’s commitment.'
    ],
    facts: ['Verstappen committed through 2030', 'Hadjar, Lawson and Lindblad remain relevant', 'Tsolov is pushing from F2', '2027 Red Bull line-up beyond Verstappen is unresolved'],
    why: 'The Red Bull junior system could become one of the main engines of the 2027 driver market.',
    next: 'Performance, injuries, team statements and contract announcements will decide which names move first.'
  }
];

export default function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=900');
  res.status(200).json({
    updated: '2026-08-25T13:35:00Z',
    sourcePolicy: 'Independent reporting: Reuters, The Race and other named motorsport sources. SPECTATE writes original summaries and analysis; no F1.com copy is used.',
    stories: STORIES
  });
}
