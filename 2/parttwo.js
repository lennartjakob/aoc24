import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", "utf-8");

var safe = 0;

// 699 too low
// 958 too high

/* Problematic Case:
2
77 80 81 84 85 86 86 90 is unsafe

wenn 2. unsicher, wird direction falsch erkannt
*/ 

var reports = [];

input.split("\n").forEach(e => {
  const report = e.split(" ");
  reports.push(report);
});




console.log(safe);