import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", "utf-8");

var reports = [];
var safe = 0;

input.split("\n").forEach(e => {
  const report = e.split(" ");
  reports.push(report);
  var last = report[0];
  var direction = 0;
  
  for (let i = 1; i < report.length; i++) {
    const entry = report[i];
    const diff = Math.abs(entry - last);
    const dir = (entry - last > 0)?1:(entry - last == 0)?0:-1;
    
    if (dir == 0) {
      console.log(e+" is unsafe because "+last+" = "+entry);
      break;
    }

    if (direction == 0) {
      direction = dir;
    }

    if ( diff < 1 || diff > 3 ) {
      console.log(e+" is unsafe because difference is "+diff);
      break;
    }

    if ( direction != dir) {
      console.log(e+" is unsafe because direction was "+direction+" and is now "+dir);
      break;
    }

    if (i == report.length-1) {
      console.log(e+" is safe");
      safe++;
    }

    last = entry;
  }
});

console.log(safe);