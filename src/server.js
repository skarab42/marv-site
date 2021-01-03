import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import missingKeyHandler from "./libs/i18next/missingKeyHandler";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app = polka();

app.get("/i18n/:ns/:key", missingKeyHandler);

app.use(
  compression({ threshold: 0 }),
  sirv("static", { dev }),
  sapper.middleware()
);

app.listen(PORT, (err) => {
  if (err) console.log("error", err);
});
