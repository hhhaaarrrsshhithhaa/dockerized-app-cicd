
const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./app");

const server = app.listen(0, "127.0.0.1");

test("GET / returns application information", async () => {
  const address = server.address();
  const response = await fetch(`http://127.0.0.1:${address.port}/`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.application, "Dockerized SRE Demo");
  assert.equal(body.status, "running");
});

test("GET /health returns healthy status", async () => {
  const address = server.address();
  const response = await fetch(`http://127.0.0.1:${address.port}/health`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.status, "healthy");
});

test("Close the test server", async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) reject(error);
      else resolve();
    });
  });
});
