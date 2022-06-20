import app from "./app.js";
import { Server } from "socket.io";
const PORT = 3000;

const Appserver = app.listen(PORT, () =>
  console.log(`App is running and Listening on port ${PORT}`)
);

const io = new Server(Appserver, {
  cors: {
    origin: "*",
    method: ["GET", "POST", "DELETE", "PTACH", "PUT"],
  },
});

io.on("connection", (client) => {
  // console.log("Hi there");

  client.on("Engine", (data) => {
    io.emit("Engine", data);
  });
  client.on("Acceleration", (data) => {
    io.emit("Acceleration", data);
  });

  client.on("slowing", (data) => {
    io.emit("slowing", data);
  });
  client.on("pause", (data) => {
    io.emit("pause", data);
  });

  client.on("move", (data) => {
    io.emit("move", data);
  });
  client.on("addpassenger", (data) => {
    io.emit("addpassenger", data);
  });
  client.on("Removedpassenger", (data) => {
    io.emit("Removedpassenger", data);
  });
});
