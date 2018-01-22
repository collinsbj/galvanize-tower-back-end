const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

// var corsOptions = {
//   origin: true,
//   optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/laptops", cors(), (request, response) => {
  queries
    .list("laptops")
    .then(laptops => {
      response.json({ laptops });
    })
    .catch(console.error);
});

app.get("/phones", (request, response) => {
  queries
    .list("phones")
    .then(phones => {
      response.json({ phones });
    })
    .catch(console.error);
});

app.get("/laptops/:id", (request, response) => {
  queries
    .read("laptops", request.params.id)
    .then(laptop => {
      laptop ? response.json({ laptop }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/phones/:id", (request, response) => {
  queries
    .read("phones", request.params.id)
    .then(phone => {
      phone ? response.json({ phone }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/laptops", (request, response) => {
  queries
    .create("laptops", request.body)
    .then(laptop => {
      response.status(201).json({ data: laptop });
    })
    .catch(console.error);
});

app.post("/phones", (request, response) => {
  queries
    .create("phones", request.body)
    .then(phone => {
      response.status(201).json({ data: phone });
    })
    .catch(console.error);
});

app.delete("/laptops/:id", (request, response) => {
  queries
    .delete("laptops", request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.delete("/phones/:id", (request, response) => {
  queries
    .delete("phones", request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/laptops/:id", (request, response) => {
  queries
    .update("laptops", request.params.id, request.body)
    .then(laptop => {
      response.json({ data: laptop[0] });
    })
    .catch(console.error);
});

app.put("/phones/:id", (request, response) => {
  queries
    .update("phones", request.params.id, request.body)
    .then(phone => {
      response.json({ data: phone[0] });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
