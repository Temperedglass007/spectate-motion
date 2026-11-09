const results=[
 {position:1,driver:"Lando Norris",team:"McLaren",status:"1:35:23.504",gap:"Winner",points:25},
 {position:2,driver:"Max Verstappen",team:"Red Bull Racing",status:"+14.602s",gap:"+14.602s",points:18},
 {position:3,driver:"Isack Hadjar",team:"Red Bull Racing",status:"+24.485s",gap:"+24.485s",points:15},
 {position:4,driver:"George Russell",team:"Mercedes",status:"+33.991s",gap:"+33.991s",points:12},
 {position:5,driver:"Kimi Antonelli",team:"Mercedes",status:"+41.017s",gap:"+41.017s",points:10},
 {position:6,driver:"Oscar Piastri",team:"McLaren",status:"+56.475s",gap:"+56.475s",points:8},
 {position:7,driver:"Liam Lawson",team:"Racing Bulls",status:"+75.402s",gap:"+75.402s",points:6},
 {position:8,driver:"Charles Leclerc",team:"Ferrari",status:"+78.586s",gap:"+78.586s",points:4},
 {position:9,driver:"Lewis Hamilton",team:"Ferrari",status:"+1 lap",gap:"+1 lap",points:2},
 {position:10,driver:"Nico Hülkenberg",team:"Audi",status:"+1 lap",gap:"+1 lap",points:1}
];
const drivers=[
 {position:1,driver:"Kimi Antonelli",team:"Mercedes",points:390},
 {position:2,driver:"Max Verstappen",team:"Red Bull Racing",points:279},
 {position:3,driver:"George Russell",team:"Mercedes",points:262},
 {position:4,driver:"Lewis Hamilton",team:"Ferrari",points:261},
 {position:5,driver:"Charles Leclerc",team:"Ferrari",points:251},
 {position:6,driver:"Lando Norris",team:"McLaren",points:246},
 {position:7,driver:"Oscar Piastri",team:"McLaren",points:152},
 {position:8,driver:"Isack Hadjar",team:"Red Bull Racing",points:122},
 {position:9,driver:"Liam Lawson",team:"Racing Bulls",points:87},
 {position:10,driver:"Pierre Gasly",team:"Alpine",points:42}
];
const constructors=[
 {position:1,team:"Mercedes",points:652},
 {position:2,team:"Ferrari",points:512},
 {position:3,team:"Red Bull Racing",points:415},
 {position:4,team:"McLaren",points:398},
 {position:5,team:"Racing Bulls",points:112},
 {position:6,team:"Alpine",points:69},
 {position:7,team:"Haas",points:31},
 {position:8,team:"Audi",points:28},
 {position:9,team:"Williams",points:12},
 {position:10,team:"Aston Martin",points:7},
 {position:11,team:"Cadillac",points:0}
];
export default function handler(req,res){
 if(req.method&&req.method!=="GET"){res.setHeader("Allow","GET");return res.status(405).json({error:"Method not allowed"});}
 res.setHeader("Cache-Control","s-maxage=300, stale-while-revalidate=600");
 res.setHeader("Access-Control-Allow-Origin","*");
 return res.status(200).json({
  updatedAt:"2026-11-09T05:30:00Z",season:2026,round:20,
  event:{name:"São Paulo Grand Prix",date:"2026-11-08",circuit:"Autódromo José Carlos Pace",laps:71,winner:"Lando Norris"},
  results,standings:{drivers,constructors},
  titles:{drivers:{winner:"Kimi Antonelli",team:"Mercedes",status:"Clinched at Mexico City"},constructors:{winner:"Mercedes",status:"Clinched at São Paulo"}},
  nextRace:{round:21,name:"Las Vegas Grand Prix",dates:"2026-11-19/2026-11-21",raceStartIST:"2026-11-22T09:30:00+05:30",officialSchedule:"https://www.formula1.com/en/racing/2026/las-vegas"},
  source:["https://www.formula1.com/en/results/2026/races/1299/brazil/race-result","https://www.formula1.com/en/results/2026/driver","https://www.formula1.com/en/results/2026/team","https://www.fia.com/news/f1-norris-triumphs-sao-paulo-mercedes-secure-2026-constructors-championship"],
  snapshot:true
 });
}