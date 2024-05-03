const { createProxyMiddleware } = require(`http-proxy-middleware`);
module.exports = function (app) {
  app.use(
    "/v4",
    createProxyMiddleware({
      target: "http://localhost:3000", // API 서버 주소
      changeOrigin: true,
    })
  );
};
