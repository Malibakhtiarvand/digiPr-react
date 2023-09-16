import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

export const Cache = createCache({
  key: "muirtl",
  stylisPlugins: [stylisRTLPlugin, prefixer],
});
