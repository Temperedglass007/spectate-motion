const STORIES = [
  {
    status:'confirmed', source:'Formula 1', kicker:'Spanish GP · Championship',
    title:'Antonelli leaves Madrid with an 81-point championship lead',
    description:'Kimi Antonelli won the inaugural Spanish Grand Prix at Madring for his eighth victory of 2026, extending his lead over Mercedes team-mate George Russell to 81 points.',
    published:'2026-09-13T15:00:00Z',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Japan%20GP%20-%20Mercedes%20-%20Kimi%20Antonelli%20-%20FP2.jpg?width=1600',
    imageCredit:'Wikimedia Commons · Liauzh · CC BY-SA 4.0',
    link:'https://www.formula1.com/en/latest/article/antonelli-clinches-victory-over-verstappen-and-norris-in-spanish-gp.644ZZfPzRPEaUh2JBHcB9',
    body:[
      'Kimi Antonelli won the inaugural Spanish Grand Prix at Madring, adding his eighth Grand Prix victory of the 2026 season.',
      'Lando Norris led from pole in the opening phase, but a Virtual Safety Car created a strategic split. A slow McLaren pit stop after the VSC had ended further changed the order.',
      'Max Verstappen finished second, Norris third, Charles Leclerc fourth and George Russell fifth. Lewis Hamilton retired with a brake problem.',
      'The result moved Antonelli 81 points clear of Russell in the Drivers’ Championship after 14 rounds.'
    ],
    keyFacts:['Antonelli P1','8th win of 2026','Verstappen P2','Norris P3','Russell P5','Antonelli +81'],
    context:'Official Formula 1 and FIA race reporting.',
    whyItMatters:'The championship leader now carries a substantial points advantage into the final stretch of the season.',
    whatNext:'Round 15 is Azerbaijan in Baku on September 26.'
  },
  {
    status:'confirmed', source:'Formula 1', kicker:'Mercedes · Championship',
    title:'Russell admits he is realistically out of the title fight',
    description:'George Russell said he is realistically no longer in the Drivers’ Championship fight after finishing fifth in Madrid and falling 81 points behind Antonelli.',
    published:'2026-09-13T17:06:00Z',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/George%20Russel%20Mercedes%20F1%20%2855383745976%29.jpg?width=1600',
    imageCredit:'Wikimedia Commons · CC BY-SA 4.0',
    link:'https://www.formula1.com/en/latest/article/im-not-in-the-fight-for-the-drivers-title-george-russell-concedes-doubts-over-title-challenge-after-antonellis-madrid-win.7KEnyGkZGdpac7a5RD8sx9',
    body:[
      'Russell finished fifth at Madring while team-mate Antonelli took his eighth win of the season.',
      'The result left Russell 81 points behind Antonelli. Russell said he is realistically not in the title fight, while Toto Wolff has since spoken about Mercedes unlocking more of Russell’s potential.',
      'Mercedes remains focused on the Constructors’ Championship as the team heads to Baku.'
    ],
    keyFacts:['Russell P5 in Spain','81-point deficit','Antonelli 8 wins','Mercedes leads constructors'],
    context:'Russell’s comments are his own assessment of the championship situation, not a mathematical elimination.',
    whyItMatters:'The Mercedes intra-team points gap is now one of the clearest storylines heading into Baku.',
    whatNext:'Baku gives Russell another chance to reduce the deficit.'
  },
  {
    status:'confirmed', source:'Formula 1', kicker:'Red Bull · Driver update',
    title:'Hadjar’s Baku return remains undecided as recovery continues',
    description:'Red Bull says Isack Hadjar’s recovery is progressing normally, but the team will wait before deciding whether he is ready to return in Azerbaijan.',
    published:'2026-09-17T14:58:00Z',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Isack%20Hadjar%202025.jpg?width=1600',
    imageCredit:'Wikimedia Commons · driver reference visual',
    link:'https://www.formula1.com/en/latest/article/nothing-wrong-with-isacks-recovery-laurent-mekies-on-when-isack-hadjar-will-return.5VYeVNlvMTpwjhT0zPCw8',
    body:[
      'Isack Hadjar has missed Zandvoort, Monza and Madrid while recovering from a wrist injury sustained during the summer break.',
      'Red Bull team principal Laurent Mekies said there has been no additional setback and that the recovery is taking a normal amount of time.',
      'The team plans to evaluate Hadjar again before deciding whether he is close enough to 100 percent to return to the car in Azerbaijan.'
    ],
    keyFacts:['Hadjar missed 3 races','Wrist injury','No additional setback','Baku decision pending'],
    context:'Liam Lawson has been standing in for Hadjar at Red Bull, while Yuki Tsunoda has occupied Lawson’s Racing Bulls seat.',
    whyItMatters:'Hadjar’s return changes the Red Bull and Racing Bulls driver line-up for the Baku weekend.',
    whatNext:'Red Bull’s final assessment before Azerbaijan will determine whether Hadjar returns.'
  },
  {
    status:'confirmed', source:'Formula 1', kicker:'Baku · Race preview',
    title:'Baku is next: Round 15 arrives on September 26',
    description:'Formula 1 heads to the 6.003-kilometre Baku City Circuit for the Azerbaijan Grand Prix, with the race scheduled for Saturday September 26.',
    published:'2026-09-18T08:00:00Z',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Baku%20City%20Circuit.jpg?width=1600',
    imageCredit:'Wikimedia Commons · Baku City Circuit reference visual',
    link:'https://www.formula1.com/en/racing/2026/azerbaijan',
    body:[
      'The Azerbaijan Grand Prix is Round 15 of the 2026 championship and takes place in Baku from September 24 to 26.',
      'The Baku City Circuit is 6.003 kilometres long and the Grand Prix is scheduled for 51 laps.',
      'Local-time sessions begin with FP1 at 12:30 on Thursday, qualifying at 16:00 on Friday and the Grand Prix at 15:00 on Saturday. The race start is 16:30 IST.'
    ],
    keyFacts:['Round 15','24–26 September','6.003 km','51 laps','Race: 15:00 Baku / 16:30 IST'],
    context:'Baku combines a very long main straight with a narrow old-city section, making low drag and confidence under braking important setup considerations.',
    whyItMatters:'It is the first race after Antonelli extended his championship lead to 81 points.',
    whatNext:'Practice begins September 24.'
  },
  {
    status:'analysis', source:'SPECTATE desk · based on F1 reporting', kicker:'Baku · Analysis',
    title:'Three questions SPECTATE is taking into Baku',
    description:'Can Mercedes convert its championship advantage into another win, can Norris recover from the Madrid strategy loss, and how will Red Bull’s driver line-up look once Hadjar’s fitness is assessed?',
    published:'2026-09-18T09:00:00Z',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Baku%20City%20Circuit.jpg?width=1600',
    imageCredit:'Wikimedia Commons · Baku City Circuit reference visual',
    link:'https://www.formula1.com/en/racing/2026/azerbaijan',
    body:[
      'Mercedes arrives in Baku with Antonelli holding an 81-point advantage over Russell. That gives the team a strong championship position, but the street circuit’s long straight and narrow sections can produce a very different competitive picture.',
      'Norris enters the weekend after losing the Spanish Grand Prix lead through the VSC and pit-stop sequence. The key question is whether McLaren can turn qualifying pace into clean race execution.',
      'Red Bull also has an immediate operational question: Hadjar’s return remains undecided, while Lawson has scored sixth in Madrid after finishing seventh at Zandvoort.'
    ],
    keyFacts:['Antonelli +81','Norris recovering from P3 in Madrid','Hadjar return undecided','Lawson P6 in Madrid'],
    context:'This is SPECTATE interpretation, not a prediction of the race result.',
    whyItMatters:'Baku can reward a different balance of qualifying speed, straight-line efficiency and race execution than Madring.',
    whatNext:'FP1 and FP2 on September 24 will provide the first direct evidence.'
  },
  {
    status:'speculation', source:'Formula 1 · driver-market reporting', kicker:'Rumour watch · Aston Martin',
    title:'Alonso’s 2027 future remains unresolved',
    description:'Fernando Alonso has still not announced whether he will continue racing for Aston Martin in 2027. The seat is therefore one of the major unresolved pieces of the driver market.',
    published:'2026-09-18T07:30:00Z',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Japan%20GP%20-%20Aston%20Martin%20-%20Fernando%20Alonso%20-%20FP1.jpg?width=1600',
    imageCredit:'Wikimedia Commons · Liauzh · CC BY-SA 4.0',
    link:'https://www.formula1.com/en/latest/article/its-not-my-biggest-priority-alonso-in-no-hurry-to-make-call-on-his-aston-martin-future.35uUOTMKs5twJIc1aJ6HJU',
    body:[
      'Fernando Alonso has not made a final public decision on whether he will continue as an Aston Martin race driver in 2027.',
      'Aston Martin has said its focus is to continue with Alonso, while also making clear that the decision is ultimately his.',
      'The possible outcomes — staying, stepping away from the cockpit or moving into another role — remain possibilities rather than confirmed plans.'
    ],
    keyFacts:['No 2027 decision announced','Aston Martin wants continuity','Alonso says the decision is still open','Speculation only'],
    context:'This story belongs in the rumour ledger because the underlying fact is the unresolved decision, not any claimed replacement.',
    whyItMatters:'An Alonso decision would affect one of the remaining open pieces of the 2027 driver market.',
    whatNext:'Watch for Alonso or Aston Martin to announce a decision.'
  },
  {
    status:'speculation', source:'Formula 1 · driver-market reporting', kicker:'Rumour watch · Racing Bulls',
    title:'Tsolov remains one of the names to watch for 2027',
    description:'Nikola Tsolov continues to feature in Racing Bulls driver-market discussion after his F2 campaign and first F1 test, but no 2027 seat has been confirmed.',
    published:'2026-09-18T08:30:00Z',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20166%20F2%20%282%29.jpg?width=1600',
    imageCredit:'Wikimedia Commons · F2 reference visual',
    link:'https://www.formula1.com/en/latest/article/f2-title-leader-tsolov-completes-first-f1-test-with-racing-bulls.5SUvLrKpgvPLIN5mzqK7gr',
    body:[
      'Nikola Tsolov has continued to attract attention around the 2027 driver market while competing for the Formula 2 title.',
      'He completed 690 kilometres in his first F1 test with Racing Bulls at Imola, part of the team’s Testing of Previous Cars programme.',
      'Racing Bulls team principal Alan Permane previously described Tsolov as “next in line” while stressing that no timing or seat was guaranteed.'
    ],
    keyFacts:['F2 title contender','First F1 test completed','690 km at Imola','Racing Bulls seat not confirmed'],
    context:'The test and Permane’s comments are established facts; a 2027 promotion remains speculation.',
    whyItMatters:'Racing Bulls is one of the teams where the Red Bull junior pipeline could affect the 2027 grid.',
    whatNext:'Tsolov’s F2 results and any Racing Bulls or Red Bull announcement will provide the next evidence.'
  }
];

export default function handler(req,res){
  res.setHeader('Cache-Control','s-maxage=120, stale-while-revalidate=300');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.status(200).json({
    updatedAt:'2026-09-18T10:42:00Z',
    stories:STORIES,
    policy:'Formula 1, FIA, teams and drivers are the primary sources. Confirmed means the underlying fact is established. SPECTATE analysis is separated from reporting. Rumours remain explicitly labelled as speculation.'
  });
}
