var CreateStore = require("redux").createStore;
var reducer = require("./reducer");

var store = CreateStore(reducer);

module.exports = store;