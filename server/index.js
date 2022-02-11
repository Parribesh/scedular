const express = require("express");
const bodyParser = require("body-parser");
const FormData = require("form-data");
const fetch = require("node-fetch");
const usersRoute = require("./routes/users");

const {
  client_id,
  redirect_uri,
  client_secret,
  news_api,
  weather_api,
} = require("./config");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/*" }));

app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});
//post method for github authentication
app.post("/authenticate", (req, res) => {
  const { code } = req.body;

  const data = new FormData();
  data.append("client_id", client_id);
  data.append("client_secret", client_secret);
  data.append("code", code);
  data.append("redirect_uri", redirect_uri);

  // Request to exchange code for an access token
  fetch(`https://github.com/login/oauth/access_token`, {
    credentials: "include",
    method: "POST",
    body: data,
  })
    .then((response) => response.text())
    .then((paramsString) => {
      let params = new URLSearchParams(paramsString);
      const access_token = params.get("access_token");

      // Request to return data of a user that has been authenticated
      return fetch(`https://api.github.com/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      });
    })
    .then((response) => response.json())
    .then((response) => {
      const fetchValue = {
        username: response.name,
        code: response.id,
      };

      fetch("http://192.168.1.206:5001/users", {
        mode: "cors",
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(fetchValue),
      })
        .then((res) => res.json())
        .then((data) => data);

      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
});

app.get("/news", (req, res) => {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2022-02-03&" +
    "sortBy=popularity&" +
    `apiKey=${news_api}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
});

app.post("/weather", (req, res) => {
  const coordinates = req.body;
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${weather_api}&units=imperial`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data));
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, "192.168.1.206", () => console.log(`Listening on ${PORT}`));
