const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    `/api`,
    createProxyMiddleware({
      target: `http://${process.env.API_HOST || '127.0.0.1'}:${process.env.PORT || 3003}`,
      changeOrigin: true,
    })
  );
  app.use(
    `/proxy`,
    createProxyMiddleware({
      target: `http://${process.env.API_HOST || '127.0.0.1'}:${process.env.PORT || 3003}`,
      changeOrigin: true,
    })
  );
  app.use(
    `/stats`,
    createProxyMiddleware({
      target: `http://${process.env.API_HOST || '127.0.0.1'}:${process.env.PORT || 3003}`,
      changeOrigin: true,
    })
  );
  app.use(
    `/sync`,
    createProxyMiddleware({
      target: `http://${process.env.API_HOST || '127.0.0.1'}:${process.env.PORT || 3003}`,
      changeOrigin: true,
    })
  );
  app.use(
    `/auth`,
    createProxyMiddleware({
      target: `http://${process.env.API_HOST || '127.0.0.1'}:${process.env.PORT || 3003}`,
      changeOrigin: true,
    })
  );
  app.use(
    `/backup`,
    createProxyMiddleware({
      target: `http://${process.env.API_HOST || '127.0.0.1'}:${process.env.PORT || 3003}`,
      changeOrigin: true,
    })
  );
  app.use(
    `/logs`,
    createProxyMiddleware({
      target: `http://${process.env.API_HOST || '127.0.0.1'}:${process.env.PORT || 3003}`,
      changeOrigin: true,
    })
  );
  // app.use(
  //   `/ws`,
  //   createProxyMiddleware({
  //     target: `ws://${process.env.API_HOST || '127.0.0.1'}:${process.env.WS_PORT || 3004}`,
  //     ws: true,
  //     changeOrigin: true,
  //     secure: false,
  //   })
  // );
  
  console.log(`Proxy middleware applied`);
};
