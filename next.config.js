/** @type {import('next').NextConfig} */
const nextConfig = {
  env: getEnvConfig(),
  trailingSlash: true,
  // output: 'export',
  // distDir: "out",
};

module.exports = nextConfig;

function getEnvConfig() {
  const environment = process.env.TARGET_ENV || process.env.NODE_ENV;

  try {
    return require(`./env-${environment}.json`);
  } catch (err) {
    return require("./env.json");
  }
}
