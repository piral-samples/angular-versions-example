import "piral/polyfills";
import "core-js/es/reflect";
import "core-js/stable/reflect";
import "core-js/features/reflect";
import "zone.js";

import { renderInstance } from "piral";
import { layout, errors } from "./layout";

const feedUrl = "https://feed.piral.cloud/api/v1/pilet/angular-versions-sample";

renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});
