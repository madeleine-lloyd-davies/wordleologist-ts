// env setting
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const keys = require("./config/dev");

const app = require("./app");

// start listening (and create a 'server' object representing our server)
const PORT = keys.PORT || 3000;
app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
