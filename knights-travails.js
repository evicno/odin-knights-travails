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
    start[0] < 0 ||
    start[0] > 7 ||
    start[1] < 0 ||
    start[1] > 7 ||
    end[0] < 0 ||
    end[0] > 7 ||
    end[1] < 0 ||
    end[1] > 7
  ) {
    throw new Error('Only use integers between 0 and 7');
  }

  const xEnd = end[0];
  const yEnd = end[1];

  let queue = [[start]];
  const visitedPositions = new Set();
  visitedPositions.add(start.join(','));

  while (queue.length > 0) {
    let currentPath = queue.shift();
    let currentLastMove = currentPath[currentPath.length - 1];
    const xMove = currentLastMove[0];
    const yMove = currentLastMove[1];
    if (xMove === xEnd && yMove === yEnd) {
      displayResult(currentPath);
      return;
    } else {
      let moves = getMovesList(currentLastMove[0], currentLastMove[1]);
      for (let i = 0; i < moves.length; i++) {
        if (visitedPositions.has(moves[i])) {
          continue;
        } else {
          visitedPositions.add(moves[i].join(','));
          let newPath = [...currentPath, moves[i]];
          queue.push(newPath);
        }
      }
    }
  }

  function getMovesList(x, y) {
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
      // Check if the new move is on the board and not already part of the path
      if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
        validMoves.push([newX, newY]);
      }
    }
    return validMoves;
  }

  function displayResult(path) {
    let moves = path.length - 1;
    console.log('You made it in ' + moves + ' moves! Here is your path:');
    for (let i = 0; i < path.length; i++) {
      console.log(path[i]);
    }
    return;
  }
}
