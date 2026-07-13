const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// module.exports = withNativeWind(config, { input: "./global.css" });

config.transformer.transformIgnorePatterns = [
  "node_modules/(?!(react-native|@react-native|expo|@expo|some-pkg)/)",
];

module.exports = config;
