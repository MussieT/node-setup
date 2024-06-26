require("module-alias/register");
require("dotenv").config();
require("spm-agent-nodejs");

const express = require("express");
const {
  logErrorMiddleware,
  returnError,
  logError,
} = require("./error-handler/errorHandler");
const httpLogger = require("./error-handler/httpLogger.js");
const { Api404Error } = require("./error-handler/errorTypes.js");

require("./error-handler/error-unhandled.js");
// require("@root/alias/index.js");

const app = express();

app.use(httpLogger);

app.get("/", (req, res, next) => {
  res.status(200).send("Hello World!");
});

function fetchData() {
  return new Promise((resolve, reject) => {
    let data = 0;
    resolve(data);
  });
}

app.post("/user", (req, res, next) => {
  fetchData()
    .then(() => {
      throw new Api404Error("User Not found");
    })
    .catch((error) => {
      console.info("here we are");
      next(error);
    });
});

app.use(logErrorMiddleware);
app.use(returnError);

app.listen(3000, () => {
  console.info("we are running good.");
});
