"use strict";

/**
 * portfolio controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::portfolio.portfolio",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const query = {
        filters: { slug },
        populate: "Image",
        ...ctx.query,
      };

      const post = await strapi.entityService.findMany(
        "api::portfolio.portfolio",
        query
      );
      const sanitizedEntity = await this.sanitizeOutput(post);
      return sanitizedEntity[0];
    },
    async find(ctx) {
      console.log(ctx.request.query);
      const { pagination } = ctx.request.query;
      const { results } = await strapi
        .service("api::portfolio.portfolio")
        .find({ populate: "Image", pagination });
      return results;
    },
  })
);
