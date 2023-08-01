export const express = require("express");

const app = express();

const emailRoutes = require("./email");

app.use("/email", emailRoutes);

module.exports = app;
