const { CONSTANTS } = require('./constants')
let connection;


const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  if (CONSTANTS[key]) {
    connection.write(CONSTANTS[key]);
  }
 
};


const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", handleUserInput);
  stdin.on("data", handleUserInput);
  return stdin;
};



module.exports = { setupInput }