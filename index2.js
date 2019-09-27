const { nextISSFlyOverTimes } = require('./iss_promised');

const printPassTimes = function(passes) {
  for (let i of passes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(i.risetime);
    console.log(`next pass is ${datetime} for ${i.duration} seconds!`);
  }
};


nextISSFlyOverTimes()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });