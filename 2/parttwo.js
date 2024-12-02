import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", "utf-8");

var safe = 0;

// 699 too low
// 958 too high

/* Problematic Case:
2
77 80 81 84 85 86 86 90 is unsafe
*/ 

input.split("\n").forEach(e => {
  const report = e.split(" ");

  var unsafeOperations = 0;
  const directionsCount = [0,0]

  var last;
  var lastDir;
  const entryCount = report.length;

  for (let i = 0; i < entryCount; i++) {
    const entry = report[i];
    if (i != 0) {
      if (error) {
        i = 0;
      } else {
      }
    }
    last = entry
  }


  if (unsafeOperations <= 1) {
    safe++;
  }
});

console.log(safe);