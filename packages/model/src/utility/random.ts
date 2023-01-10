export function rollDice6() {
  return getRandomInt(6) + 1;
}
export function rollDice8() {
  return getRandomInt(8) + 1;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function test() {
  return;
}
