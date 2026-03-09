export function knightMoves(start, end) {
  if (
    !Array.isArray(start) ||
    !Array.isArray(end) ||
    start.length != 2 ||
    end.length != 2
  )
    throw new Error('Parameters must be [ , ], [ , ]');
  else if (
    !Number.isInteger(start[0]) ||
    !Number.isInteger(start[1]) ||
    !Number.isInteger(end[0]) ||
    !Number.isInteger(end[1]) ||
    !(0 <= start[0] < 8) ||
    !(0 <= start[1] < 8) ||
    !(0 <= end[0] < 8) ||
    !(0 <= end[1] < 8)
  ) {
    throw new Error('Only use integers between 0 and 7');
  }

  const xStart = start[0];
  const yStart = start[1];
  const xEnd = end[0];
  const yEnd = end[1];
  let numberOfMoves = 0;
  let path = [];

  if (xStart === xEnd && yStart === yEnd) {
    displayResult(numberOfMoves, path);
    return;
  }

  return { getMovesList };
}

export function getMovesList(x, y) {
  let validMoves = [];
  let possibleMoves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ];
  for (let move of possibleMoves) {
    let newX = x + move[0];
    let newY = y + move[1];
    if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
      validMoves.push([newX, newY]);
    }
  }
  return validMoves;
}
