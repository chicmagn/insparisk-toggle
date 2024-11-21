const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const path = require("path");
app.use(cors());

app.get("/api/check", async (req, res) => {
  const axios = require("axios");
  const FormData = require("form-data");
  let data = new FormData();
  data.append("id", "BcrfXFltKSEbSiD1");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://insparisk.app.n8n.cloud/api/v1/workflows/BcrfXFltKSEbSiD1",
    headers: {
      "X-N8N-API-KEY":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjAxNjEwMS01NmRiLTQ2NTktYjEyMy1jZWQyYThmMDQ1MTciLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzMyMTk5MjQ4fQ.Do9rHhgZQLx45ouTEYlUiwc1eMO9QRjmXRtXUPTQDEU",
      ...data.getHeaders(),
    },
    data: data,
  };

  const response = await axios.get(config.url, {
    headers: config.headers,
    params: {
      id: data.id,
    },
  });

  res.status(200).send({
    success: true,
    active: response.data.active,
  });
});

app.post("/api/activate", async (req, res) => {
  const axios = require("axios");
  const FormData = require("form-data");
  let data = new FormData();
  data.append("id", "BcrfXFltKSEbSiD1");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://insparisk.app.n8n.cloud/api/v1/workflows/BcrfXFltKSEbSiD1/activate",
    headers: {
      "X-N8N-API-KEY":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjAxNjEwMS01NmRiLTQ2NTktYjEyMy1jZWQyYThmMDQ1MTciLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzMyMTk5MjQ4fQ.Do9rHhgZQLx45ouTEYlUiwc1eMO9QRjmXRtXUPTQDEU",
      ...data.getHeaders(),
    },
    data: data,
  };

  const response = await axios.post(config.url, data, {
    headers: config.headers,
  });

  res.status(200).send({
    success: true,
    active: response.data.active,
  });
});

app.post("/api/deactivate", async (req, res) => {
  const axios = require("axios");
  const FormData = require("form-data");
  let data = new FormData();
  data.append("id", "BcrfXFltKSEbSiD1");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://insparisk.app.n8n.cloud/api/v1/workflows/BcrfXFltKSEbSiD1/deactivate",
    headers: {
      "X-N8N-API-KEY":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjAxNjEwMS01NmRiLTQ2NTktYjEyMy1jZWQyYThmMDQ1MTciLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzMyMTk5MjQ4fQ.Do9rHhgZQLx45ouTEYlUiwc1eMO9QRjmXRtXUPTQDEU",
      ...data.getHeaders(),
    },
    data: data,
  };

  const response = await axios.post(config.url, data, {
    headers: config.headers,
  });

  res.status(200).send({
    success: true,
    active: response.data.active,
  });
});

// Serve frontend static files
app.use("/", express.static(path.join(__dirname, "../frontend/dist")));
// Handle frontend routes
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
