const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'http://ai.savorcare.com',
    createProxyMiddleware({
      target: 'http://ai.savorcare.com',
      changeOrigin: true,
    })
  );
};
