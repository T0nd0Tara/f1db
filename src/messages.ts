export enum MessageType {
  radio = 'RADIO',
  crofty = 'CROFTY',
  raceStatus = 'RACE_STATUS',
  newLap = 'NEW_LAP',
  stewards = 'STEWARDS',
}

export enum Driver {
  // ALPINE
  COL = 43,
  GAS = 10,

  // ASTON
  ALO = 14,
  STR = 18,
  // FERRARI
  LEC = 16,
  HAM = 44,

  // HAAS
  OCO = 31,
  BEA = 87,

  // MCLAREN
  NOR = 4,
  PIA = 81,

  // MERCEDES
  ANT = 12,
  RUS = 63,

  // VCARB
  HAD = 6,
  LAW = 30,

  // RED BULL
  VER = 1,
  TSU = 22,

  // STAKE
  BOR = 5,
  HUL = 27,

  // WILLIAMS
  ALB = 23,
  SAI = 55,
}
export interface Message {
  time: number,
  type: MessageType,
  msg: string,
  relevantDrivers: Driver[],
}

export const sequence: Message[] = [
  { time: 0, type: MessageType.raceStatus, msg: 'Formation Lap', relevantDrivers: [] },
  { time: 0, type: MessageType.newLap, msg: "#0", relevantDrivers: [] },

  { time: 1, type: MessageType.crofty, msg: 'is that stroll? already in the wall??', relevantDrivers: [Driver.STR] },
  { time: 10, type: MessageType.radio, msg: "I don't know what happend mate", relevantDrivers: [Driver.STR] },
  { time: 12, type: MessageType.radio, msg: "Don't worry about it, dad will fix it", relevantDrivers: [Driver.STR] },
  { time: 14, type: MessageType.raceStatus, msg: "VSC", relevantDrivers: [] },
  { time: 20, type: MessageType.crofty, msg: 'Virtual Safety car Has been deployed', relevantDrivers: [] },
  { time: 25, type: MessageType.stewards, msg: `Incident between Car ${Driver.STR} and Car (wall) noted. Under investigation.`, relevantDrivers: [Driver.STR] },

  { time: 60, type: MessageType.crofty, msg: 'Drivers are starting to wiggle around, warming their tires', relevantDrivers: [] },
  { time: 70, type: MessageType.crofty, msg: 'I think russle is a bit over the line, wont you say Brundle?', relevantDrivers: [Driver.RUS] },

  { time: 100, type: MessageType.raceStatus, msg: "The lights are out and we're racing in Silverstone!", relevantDrivers: [] },
  { time: 100, type: MessageType.newLap, msg: "#1", relevantDrivers: [] },
  { time: 100, type: MessageType.crofty, msg: "Great start from Verstappen as he leads into Turn 1!", relevantDrivers: [Driver.VER] },
  { time: 100, type: MessageType.radio, msg: "Box, box, box this lap. We have a puncture.", relevantDrivers: [Driver.HAM] },
  { time: 100, type: MessageType.raceStatus, msg: "Yellow flag in Sector 1", relevantDrivers: [] },
  { time: 100, type: MessageType.stewards, msg: `Incident between Car ${Driver.HAM} and Car ${Driver.SAI} noted. Under investigation.`, relevantDrivers: [Driver.HAM, Driver.SAI] },
  { time: 104, type: MessageType.stewards, msg: `No further action between Car ${Driver.STR} and Car (wall)`, relevantDrivers: [Driver.STR] },

  { time: 101, type: MessageType.newLap, msg: "#2", relevantDrivers: [] },
  { time: 101, type: MessageType.radio, msg: "Puncture confirmed. Switching to hards.", relevantDrivers: [Driver.HAM] },
  { time: 102, type: MessageType.raceStatus, msg: "Green flag. Racing resumes.", relevantDrivers: [] },
  { time: 102, type: MessageType.crofty, msg: "Fastest lap of the race so far by Norris!", relevantDrivers: [Driver.NOR] },
  { time: 103, type: MessageType.radio, msg: "Tyres are overheating, guys. I'm losing grip.", relevantDrivers: [Driver.LEC] },
  { time: 104, type: MessageType.stewards, msg: `No further action between Car ${Driver.HAM} and Car ${Driver.SAI}.`, relevantDrivers: [Driver.HAM, Driver.SAI] },

  { time: 105, type: MessageType.newLap, msg: "#3", relevantDrivers: [] },
  { time: 106, type: MessageType.radio, msg: "Engine temperatures are high. Keep it in mode 7.", relevantDrivers: [Driver.ANT] },
  { time: 107, type: MessageType.crofty, msg: "Alonso making a move on Russell for P5 — what a battle!", relevantDrivers: [Driver.ALO, Driver.RUS] },

  { time: 108, type: MessageType.newLap, msg: "#4", relevantDrivers: [Driver.VER, Driver.NOR, Driver.LEC] },
  { time: 109, type: MessageType.radio, msg: "Tell him not to move under braking, it's dangerous!", relevantDrivers: [Driver.RUS] },
  { time: 109, type: MessageType.stewards, msg: `Car ${Driver.ALO} given a warning for weaving under braking.`, relevantDrivers: [Driver.ALO] },
  { time: 110, type: MessageType.crofty, msg: "Hamilton sets a purple first sector on his recovery drive.", relevantDrivers: [Driver.HAM] },

  { time: 111, type: MessageType.newLap, msg: "#5", relevantDrivers: [Driver.VER] },
  { time: 112, type: MessageType.radio, msg: "Plan B? Let me know if you need me to push.", relevantDrivers: [Driver.LEC] },

  { time: 114, type: MessageType.newLap, msg: "#6", relevantDrivers: [Driver.HAM] },
  { time: 115, type: MessageType.radio, msg: "Rain expected in 10 minutes.", relevantDrivers: [Driver.VER] },
  { time: 116, type: MessageType.crofty, msg: "And here comes Norris! He’s within DRS range of Verstappen!", relevantDrivers: [Driver.NOR, Driver.VER] },

  { time: 117, type: MessageType.newLap, msg: "#7", relevantDrivers: [Driver.VER, Driver.NOR] },
  { time: 118, type: MessageType.radio, msg: "I have no grip anymore, box for new tyres.", relevantDrivers: [Driver.SAI] },
  { time: 119, type: MessageType.stewards, msg: `Track limits violation by Car ${Driver.SAI}. Black-and-white flag shown.`, relevantDrivers: [Driver.SAI] },

  { time: 120, type: MessageType.newLap, msg: "#8", relevantDrivers: [] },
  { time: 120, type: MessageType.raceStatus, msg: "Light drizzle reported in Sector 3.", relevantDrivers: [] },
  { time: 121, type: MessageType.radio, msg: "Rain is picking up here. We may need inters soon.", relevantDrivers: [Driver.NOR] },
  { time: 123, type: MessageType.crofty, msg: "And Norris takes the lead down the Hangar Straight!", relevantDrivers: [Driver.NOR, Driver.VER] },

  { time: 124, type: MessageType.newLap, msg: "#9", relevantDrivers: [] },
  { time: 124, type: MessageType.raceStatus, msg: "Norris now leads Verstappen by 0.8s.", relevantDrivers: [Driver.NOR, Driver.VER] },
  { time: 126, type: MessageType.radio, msg: "Intermediates ready in the box.", relevantDrivers: [Driver.ANT] },

  { time: 128, type: MessageType.newLap, msg: "#10", relevantDrivers: [] },
  { time: 128, type: MessageType.raceStatus, msg: "Pit stops begin as rain increases.", relevantDrivers: [] },
  { time: 129, type: MessageType.raceStatus, msg: "Virtual Safety Car deployed: debris on track.", relevantDrivers: [] },
  { time: 130, type: MessageType.radio, msg: "Ok Lewis, stay out. Track should dry soon.", relevantDrivers: [Driver.HAM] },

  { time: 131, type: MessageType.newLap, msg: "#11", relevantDrivers: [] },
  { time: 131, type: MessageType.raceStatus, msg: "Norris still leads under VSC.", relevantDrivers: [Driver.NOR] },
  { time: 133, type: MessageType.raceStatus, msg: "Green flag. Racing resumes.", relevantDrivers: [] },
  { time: 134, type: MessageType.crofty, msg: "Verstappen retakes the lead as Norris struggles in Sector 2!", relevantDrivers: [Driver.VER, Driver.NOR] },

  { time: 135, type: MessageType.newLap, msg: "#12", relevantDrivers: [] },
  { time: 135, type: MessageType.raceStatus, msg: "Verstappen leads Norris by 1.2s.", relevantDrivers: [Driver.VER, Driver.NOR] },
  { time: 137, type: MessageType.radio, msg: "Engine feels down on power. Can we reset?", relevantDrivers: [Driver.ALO] },

  { time: 139, type: MessageType.newLap, msg: "#13", relevantDrivers: [] },
  { time: 139, type: MessageType.raceStatus, msg: "Hamilton into the points in P10.", relevantDrivers: [Driver.HAM] },
  { time: 141, type: MessageType.radio, msg: "Ok George, we need to cool the brakes. Lift and coast.", relevantDrivers: [Driver.RUS] },

  { time: 143, type: MessageType.newLap, msg: "#14", relevantDrivers: [] },
  { time: 143, type: MessageType.raceStatus, msg: "Verstappen pulling clear at the front.", relevantDrivers: [Driver.VER] },
  { time: 145, type: MessageType.radio, msg: "This car is undriveable on these tyres!", relevantDrivers: [Driver.LEC] },

  { time: 147, type: MessageType.newLap, msg: "#15", relevantDrivers: [] },
  { time: 147, type: MessageType.raceStatus, msg: "Verstappen leads by 4.5s. Rain has stopped.", relevantDrivers: [Driver.VER] },
  { time: 148, type: MessageType.crofty, msg: "What a recovery drive from Hamilton — up to P8 now!", relevantDrivers: [Driver.HAM] },

  { time: 149, type: MessageType.newLap, msg: "#16", relevantDrivers: [] },
  { time: 149, type: MessageType.raceStatus, msg: "Verstappen leads by 4.8s, Norris P2, Leclerc P3.", relevantDrivers: [Driver.VER, Driver.NOR, Driver.LEC] },
  { time: 152, type: MessageType.radio, msg: "Lando, we’re switching to Plan C, target +2.", relevantDrivers: [Driver.NOR] },

  { time: 205, type: MessageType.newLap, msg: "#25", relevantDrivers: [] },
  { time: 205, type: MessageType.raceStatus, msg: "Mid-race pit stops cycling through. Verstappen retains lead.", relevantDrivers: [Driver.VER] },
  { time: 207, type: MessageType.radio, msg: "Car feels good now, tyres are working.", relevantDrivers: [Driver.HAM] },
  { time: 215, type: MessageType.crofty, msg: "It’s Hamilton on the charge again — now P5 after a brave move on Alonso!", relevantDrivers: [Driver.HAM, Driver.ALO] },

  { time: 220, type: MessageType.newLap, msg: "#35", relevantDrivers: [] },
  { time: 220, type: MessageType.raceStatus, msg: "Verstappen still leads, but Norris closing the gap slightly.", relevantDrivers: [Driver.VER, Driver.NOR] },
  { time: 225, type: MessageType.radio, msg: "We see a small chance of rain in 5 minutes. Stay out.", relevantDrivers: [Driver.VER] },

  { time: 235, type: MessageType.newLap, msg: "#42", relevantDrivers: [] },
  { time: 235, type: MessageType.raceStatus, msg: "Rain begins lightly in Sector 2. Norris just 1.1s behind Verstappen.", relevantDrivers: [Driver.NOR, Driver.VER] },
  { time: 237, type: MessageType.crofty, msg: "Here comes Norris! Right on Verstappen’s tail now, what a fight we have!", relevantDrivers: [Driver.NOR, Driver.VER] },
  { time: 240, type: MessageType.radio, msg: "You’re doing great Lando, keep the pressure.", relevantDrivers: [Driver.NOR] },

  { time: 244, type: MessageType.newLap, msg: "#47", relevantDrivers: [] },
  { time: 244, type: MessageType.raceStatus, msg: "Norris takes the lead into Brooklands! The crowd goes wild!", relevantDrivers: [Driver.NOR, Driver.VER] },
  { time: 246, type: MessageType.radio, msg: "We’re losing power here guys. What’s happening?", relevantDrivers: [Driver.VER] },

  { time: 250, type: MessageType.newLap, msg: "#50", relevantDrivers: [] },
  { time: 250, type: MessageType.raceStatus, msg: "Two laps to go! Norris leads Verstappen by 2.4s, Hamilton P3.", relevantDrivers: [Driver.NOR, Driver.VER, Driver.HAM] },
  { time: 252, type: MessageType.crofty, msg: "Hamilton now right behind Verstappen! Could this be for P2?", relevantDrivers: [Driver.HAM, Driver.VER] },
  { time: 254, type: MessageType.radio, msg: "Let’s go get him! Hammer time!", relevantDrivers: [Driver.HAM] },

  { time: 256, type: MessageType.newLap, msg: "#51", relevantDrivers: [] },
  { time: 256, type: MessageType.crofty, msg: "Final lap! Norris leads, Hamilton overtakes Verstappen for P2!", relevantDrivers: [Driver.NOR, Driver.HAM, Driver.VER] },
  { time: 258, type: MessageType.raceStatus, msg: "Chequered flag! Lando Norris wins at Silverstone! Hamilton P2, Verstappen P3!", relevantDrivers: [Driver.NOR, Driver.HAM, Driver.VER] },
  { time: 259, type: MessageType.radio, msg: "YES! YES! Thank you so much everyone, what a car! We did it!", relevantDrivers: [Driver.NOR] },
  { time: 300, type: MessageType.radio, msg: "Well done Lewis, amazing recovery today. P2.", relevantDrivers: [Driver.HAM] },
  { time: 301, type: MessageType.radio, msg: "Yeah… tough one today guys, car just wasn’t there at the end.", relevantDrivers: [Driver.VER] },
  { time: 305, type: MessageType.raceStatus, msg: "Podium ceremony: P1 Norris, P2 Hamilton, P3 Verstappen.", relevantDrivers: [Driver.NOR, Driver.HAM, Driver.VER] },
  { time: 307, type: MessageType.crofty, msg: "And listen to that crowd! A British 1-2 here at Silverstone. Absolutely magical scenes.", relevantDrivers: [Driver.NOR, Driver.HAM] },
  { time: 310, type: MessageType.radio, msg: "Congrats Lando, you deserve this one mate. Great race.", relevantDrivers: [Driver.NOR] },
  { time: 315, type: MessageType.raceStatus, msg: "Race officially classified. Full results to follow.", relevantDrivers: [] }
]
