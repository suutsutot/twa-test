import games from "./games.js";

export default function (app) {
  app.use("/api/games", games);
};
