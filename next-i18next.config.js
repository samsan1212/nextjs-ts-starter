/** @type {import('next-i18next').UserConfig} */
const config = {
  i18n: {
    locales: ["en", "zh-HK", "ja", "ko"],
    defaultLocale: "en",
    localeDetection: true,
  },
  defaultNS: "common",
};

module.exports = config;
