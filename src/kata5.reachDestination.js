const reachDestination = (distance, speed) => {
  let time = distance / speed;

  return Math.round(time);
};

module.exports = reachDestination;
