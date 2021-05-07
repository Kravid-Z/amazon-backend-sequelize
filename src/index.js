const express = require("express");
const listEndpoints = require("express-list-endpoints");
const cors = require("cors");
const db = require("../models");
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);
const port = process.env.PORT || 5000;

db.sequelize.sync({force:true}).then(() => {
  // Here method sync its just for dev purposes and if options true are passed wil drop all tables every time i restart my server in prodcution instead of use sync i can use authenticate() METHOD and use migration sequelize
  console.log("\u001b[" + 39 + "m" + "Database Connected " + "\u001b[0m");

  app.listen(port, () => {
    console.log(
      "\u001b[" + 35 + "m" + "Server is running on port: " + port + "\u001b[0m"
    );
  });
  console.table(listEndpoints(app));
  app.on("error", (error) =>
    console.info(" ❌ Server is not running due to : ", error)
  );
});
