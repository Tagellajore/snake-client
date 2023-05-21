const net = require("net");
const { CONSTANTS } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: CONSTANTS.IP,
    port: CONSTANTS.PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server "); 
  });
  
  conn.write("Name: TAG");
  return conn;
};

module.exports = {connect};