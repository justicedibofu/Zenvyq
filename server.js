const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = process.env.PORT || 3000;

const app = next({ dev, hostname: "localhost" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  });

  server.once("error", (err) => {
    console.error("Server error:", err);
    process.exit(1);
  });

  // Handle Phusion Passenger socket or standard TCP port
  if (typeof PhusionPassenger !== "undefined" || process.env.PORT === "passenger") {
    server.listen("passenger");
  } else {
    server.listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  }
});
