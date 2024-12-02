import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", "utf-8");

var lines =[[],[]];


const similarity = new Map();

input.split("\n").forEach(e => {
  const line = e.split("   ");
  if( similarity.has(line[1]) ) {
    const c = similarity.get(line[1]);
    similarity.set(line[1],c+1);
  } else {
    similarity.set(line[1],1);
  }
  lines[0].push(line[0]);
  lines[1].push(line[1]);
});


lines[0].sort();
lines[1].sort();

var ergList = []
var erg = 0;

var similarityScore = 0;

for(let i = 0; i < lines[0].length; i++) {
  const distance = Math.abs(lines[0][i]-lines[1][i]);
  erg += distance;
  ergList.push(distance);
  if (similarity.has(lines[0][i])) {
    similarityScore += similarity.get(lines[0][i])*lines[0][i];
  }
}

console.log("Similarity Score:");
console.log(similarityScore);
console.log("Total Distance:");
console.log(erg);