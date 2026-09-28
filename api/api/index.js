// Vercel serverless entry: the Express app handles every request.
// Tables are created on the first request of each instance (sync is idempotent).
const server = require("../src/app.js");
const { conn } = require("../src/db.js");

const ready = conn.sync({ force: false });

module.exports = async (req, res) => {
  await ready;
  return server(req, res);
};
