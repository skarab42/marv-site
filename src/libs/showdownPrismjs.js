"use strict";

// Evily inspired by https://github.com/Bloggify/showdown-highlight

import showdown from "showdown";
import Prism from "prismjs";
import entities from "entities";

function replacement(wholeMatch, match, left, right) {
  const input = entities.decodeHTML(match);
  let [langMatch, lang] = left.match(/class=\"([^ \"]+)/) || [];
  lang = Prism.languages[lang] ? lang : "markup";
  const output = Prism.highlight(input, Prism.languages[lang], lang);
  return `${left}${output}${right}`;
}

function filter(text) {
  let left = "<pre><code\\b[^>]*>";
  let right = "</code></pre>";
  let flags = "g";

  return showdown.helper.replaceRecursiveRegExp(
    text,
    replacement,
    left,
    right,
    flags
  );
}

export default function showdownPrism() {
  return [{ type: "output", filter }];
}
