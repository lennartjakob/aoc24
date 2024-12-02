import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", "utf-8");

var reports = [];
var safe = 0;

// 697 too low

input.split("\n").forEach(e => {
  const report = e.split(" ");
  reports.push(report);
  var last = report[0];
  var direction = 0;
  var lastWasUnsafe = false;
  for (let i = 1; i < report.length; i++) {
    const entry = report[i];
    const diff = Math.abs(entry - last);
    const dir = (entry - last > 0)?1:(entry - last == 0)?0:-1;
    if (direction == 0 && dir != 0) {
      direction = dir;
    }
    if (dir == 0) {
      if (!lastWasUnsafe) {
        console.log(last + " + " + entry + "deemed unsafe");
        lastWasUnsafe = true;
      } else {
        console.log(e+" is unsafe because "+last+" = "+entry);
        break;
      }
    } else if ( diff < 1 || diff > 3 ) {
      if (!lastWasUnsafe) {
        console.log(last + " + " + entry + "deemed unsafe");
        lastWasUnsafe = true;
      } else {
        console.log(e+" is unsafe because difference is "+diff);
        break;
      }
    } else if ( direction != dir) {
      if (!lastWasUnsafe) {
        console.log(last + " + " + entry + "deemed unsafe");
        lastWasUnsafe = true;
      } else {
        console.log(e+" is unsafe because direction was "+direction+" and is now "+dir);
        break;
      }
    }
    if (i == report.length-1) {
      console.log(e+" is safe");
      safe++;
    }
    last = entry;
  }
});

console.log(safe);