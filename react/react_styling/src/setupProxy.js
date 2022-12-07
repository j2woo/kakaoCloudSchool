const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://169.254.108.35:9000",
      changeOrigin: true,
    })
  );
};
