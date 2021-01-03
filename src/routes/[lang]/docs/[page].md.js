import fs from "fs";
import path from "path";
import config from "../../../libs/i18next/config";

const mdPath = path.resolve(__dirname, "../../../src/docs.md");

function getText(lang, page) {
  try {
    return fs.readFileSync(path.join(mdPath, `${lang}/${page}.md`));
  } catch (error) {
    return null;
  }
}

export async function get(req, res, next) {
  const { lang, page } = req.params;
  const text = getText(lang, page) || getText(config.fallbackLng, page);

  if (text) {
    res.setHeader("Content-Type", "application/json");
    res.end(text);
  } else {
    next();
  }
}
