const { AngularCompilerPlugin } = require("@ngtools/webpack");
const CopyPlugin = require("copy-webpack-plugin");
const { resolve } = require("path");

module.exports = (config) => {
  config.module.rules
    .filter((m) => m.test.toString() === /.css$/i.toString())
    .forEach((m) => {
      m.exclude = /.component.css$/i;
    });

  config.module.rules
    .filter((m) => m.test.toString() === /.s[ac]ss$/i.toString())
    .forEach((m) => {
      m.exclude = /.component.s[ac]ss$/i;
    });

  const ruleIndex = config.module.rules.findIndex(
    (m) => m.test.toString() === /.tsx?$/i.toString()
  );

  config.module.rules.splice(
    ruleIndex,
    1,
    {
      test: /.[jt]sx?$/,
      loader: "@ngtools/webpack",
    },
    {
      test: /.component.css$/i,
      use: ["to-string-loader", "css-loader?esModule=false"],
    },
    {
      test: /.component.s[ac]ss$/i,
      use: ["to-string-loader", "css-loader?esModule=false", "sass-loader"],
    }
  );

  config.plugins.push(
    new AngularCompilerPlugin({
      tsConfigPath: "tsconfig.json",
      skipCodeGeneration: true,
    }),
    new CopyPlugin({
      patterns: [{ from: resolve(__dirname, "src/assets") }],
    })
  );

  return config;
};
