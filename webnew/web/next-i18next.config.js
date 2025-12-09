const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi", "mr", "ta", "te", "kn", "bn", "pa", "gu"],
  },
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
