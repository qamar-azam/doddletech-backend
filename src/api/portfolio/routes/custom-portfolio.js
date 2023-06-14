module.exports = {
  routes: [
    {
      method: "GET",
      path: "/portfolios/:slug",
      handler: "portfolio.findOne",
    },
  ],
};
