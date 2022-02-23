var Kahoot = require("kahoot.js-updated-fixed");
var colors = require('colors');
 
if (process.argv.length <= 2) {
    console.log("Usage: node kahootspam2.js <pin> <amount>".green);
    console.log("Usage: node kahootspam2.js 000000 250".green);
  process.exit(-1);
}
 
if (300 <= process.argv[3]) {
    console.log("WARNING: Trying to send more than 300 bots will send a ETIMEDOUT error and will disconnect all bots! \nThis may also crash your internet depending on how many sockets it can handle open at one time.".yellow)
    console.log("Try running this script online for more bandwidth.".yellow)
  }   
var clients = [];
for (var i = 0; i <= process.argv[3]; ++i) {
      clients[i] = new Kahoot;
}
console.log("Joining kahoot...");
var e = 0;
for (var n in clients) {
    e++;
    clients[n].setMaxListeners(Number.POSITIVE_INFINITY)
    clients[n].join(process.argv[2] /* Or any other kahoot game pin */, "kahoot.js" + e);
    clients[n].on("joined", () => {
      if (n == process.argv[3] - 70) {
        console.log("All bots joined.".cyan);
      }
    });
    clients[n].on("questionStart", question => {
        question.answer(0);
 
    process.on('uncaughtException', function (exception) {
            n = 200;
        });
    });
 
  }