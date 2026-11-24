import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    ignores: [".next/**", "out/**", "legacy/**", "node_modules/**"],
  },
];

export default config;
