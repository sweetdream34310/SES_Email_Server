require("dotenv").config(); // Secures variables

const app = require("./utils/app"); // Backend App (server)

const Routes = require("./routes");
const cors = require("cors");
const { PORT } = require("./constants");

app.use("/api", Routes);
app.use(cors({
    origin: '*'
}));

var http = require("http").createServer(app);

let io = http.listen(PORT, () => {
  console.log(`✅ Server is listening on port: ${PORT}`);
});
