
const { nextISSTimesForMyLocation } = require('./iss');
const printPassTimes = function(passes) {
  for (let i of passes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(i.risetime);
    console.log(`next pass is ${datetime} for ${i.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

