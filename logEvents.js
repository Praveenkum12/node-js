const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const { v4: uuid } = require("uuid");
const { format } = require("date-fns");

const logEvents = async function (msg) {
  const dateTimeFormat = `${format(new Date(), "ddmmyyyy\thh:mm:ss")}`;
  const logItem = `${dateTimeFormat}\t${uuid()}\t${msg}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "logFolder"))) {
      await fsPromises.mkdir(path.join(__dirname, "logFolder"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logFolder", "logFile.txt"),
      logItem
    );
  } catch (err) {
    throw err;
  }
};

module.exports = logEvents;
