/* eslint-disable */
const r = require("./index");

const code = "PX923159639BR"; // ex: 'AA198862742BR'

r.lastEvent(code)
  .then(res => console.log(JSON.stringify(res.data, null, " ")))
  .catch(err => console.log(err));

r.allEvents(code)
  .then(res => console.log(JSON.stringify(res.data, null, " ")))
  .catch(err => console.log(err));
