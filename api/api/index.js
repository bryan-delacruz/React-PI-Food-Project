// Vercel serverless entry: the Express app handles every request.
// Tables are created on the first request of each instance (sync is idempotent).
const server = require("../src/app.js");
const { conn } = require("../src/db.js");

let ready = null;

module.exports = async (req, res) => {
  try {
    // Retry on the next request if a cold start failed (e.g. two instances syncing at once).
    ready = ready || conn.sync({ force: false });
    await ready;
  } catch (error) {
    ready = null;
    console.error(error);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.statusCode = 503;
    return res.end("Database is starting, please retry.");
  }
  return server(req, res);
};
