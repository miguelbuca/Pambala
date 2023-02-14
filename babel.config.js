module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            assets: "./assets",
            components: "./src/components",
            context: "./src/context",
            hooks: "./src/hooks",
            screens: "./src/screens",
            utils: "./src/utils",
            types: "./src/types",
            routes: "./src/routes",
            "tailwind.config": "./tailwind.config",
          },
        },
      ],
    ],
  };
};
