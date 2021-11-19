import "piral/polyfills";
import "core-js/es/reflect";
import "core-js/stable/reflect";
import "core-js/features/reflect";
import "zone.js";

import { renderInstance } from "piral";
import { layout, errors } from "./layout";

// change to your feed URL here (either using feed.piral.io or your own service)
const feedUrl = "https://feed.piral.io/api/v1/pilet/empty";

renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});
