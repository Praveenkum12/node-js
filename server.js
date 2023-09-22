const path = require("path");

const fsPromises = require("fs").promises;

async function Ops() {
  try {
    await fsPromises.readFile(
      path.join(__dirname, "files", "lorem.txt"),
      "utf-8",
      function (error, data) {
        if (error) throw error;
      }
    );
  } catch (err) {
    throw err;
  }
}

Ops();

process.on("uncaughtException", (err) => {
  console.log(`Error caught: ${err}`);
});
