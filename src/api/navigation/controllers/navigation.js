"use strict";

/**
 * navigation controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::navigation.navigation",
  ({ strapi }) => ({
    async find(ctx) {
      const { data } = await super.find(ctx);
      const sanitizedEntities = await this.sanitizeOutput(data, ctx);
      return sanitizedEntities?.attributes?.Navigation;
    },
  })
);
