import dotProp from "dot-prop";
import config from "./config";
import path from "path";
import fs from "fs";

const locales = path.resolve(__dirname, "../../../src/locales");

export default (req, res) => {
  const { ns, key } = req.params;

  config.supportedLngs.forEach((lang) => {
    const file = path.join(locales, lang, `${ns}.json`);
    const json = fs.readFileSync(file);
    const obj = JSON.parse(json.toString());

    if (!dotProp.has(obj, key)) {
      dotProp.set(obj, key, key);
      fs.writeFileSync(file, JSON.stringify(obj, null, "  "));
    }
  });

  res.end("ok");
};
