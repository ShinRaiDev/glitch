import { StudySession } from "@prisma/client";

export function calculateXP(timeSpent:any, efficiency:any) {
    const k = 1; 
    const t = timeSpent / 60;
    const e = efficiency / 100;
    const logFactor = Math.log(t + 1);
    const sinFactor = 1 + Math.sin(e * Math.PI / 180);
    const xp = (t * e * k) * logFactor * sinFactor;
    return xp;
}
  
export function calctime(Sessions: StudySession[]) {
     
    let totalTime = 0;
    Sessions?.map((session: StudySession) => {
      totalTime += session.time
    })
      return totalTime;
  }

export  function calceff(Sessions: StudySession[]) {
    
   let totalEff = 0;
   Sessions?.map((session: StudySession) => {
     totalEff += session.efficiency
   })
     return totalEff;
 }