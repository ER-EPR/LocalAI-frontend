const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://ai.savorcare.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove base path
      },
    })
  );
};
