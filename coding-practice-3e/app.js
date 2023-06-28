const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const dateTime = new Date();
  let result = `${dateTime.getDate()}-${
    dateTime.getMonth() + 1
  }-${dateTime.getFullYear()}`;

  response.send(result);
  console.log(result);
});

module.exports = app;
app.listen(3000);
