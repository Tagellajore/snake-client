const {connect} = require("./client.js");

// establish a connection with game server

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", handleUserInput);
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};




console.log("Connecting ...");
connect();

setupInput();

