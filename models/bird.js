
const BirdType = {
  BlackLeggedKittiwake: 0,
  AmericanRobin: 1,
  BlueJay: 2,
  BlackCappedChickadee: 3,
  Goldfinch: 4,
  Cardinal: 5,
  BaltimoreOriole: 6
}

const BirdPosition = {
  STATIONARY: 0,
  FLYING: 1
}

var Bird = (xPos, yPos, type) => {
  // create variables here
  return {
    id: generatedId,
    type: BirdType,
    x: xPos,
    y: yPos,
    direction: flyingDirection,
    position: currentPosition
  }
}