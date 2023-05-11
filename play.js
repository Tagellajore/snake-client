const {connect} = require("./client.js");
 
const { setupInput } = require("./input");

// establish a connection with game server





console.log("Connecting ...");
const conn = connect();

setupInput(conn);

