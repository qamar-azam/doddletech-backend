"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    const query = {
      filters: { slug },
      populate: "FeaturedImage",
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::page.page", query);
    const sanitizedEntity = await this.sanitizeOutput(post);
    console.log(sanitizedEntity);
    return sanitizedEntity[0];
  },
  async find(ctx) {
    console.log(ctx.request.query);
    const { pagination } = ctx.request.query;
    const { results } = await strapi
      .service("api::page.page")
      .find({ populate: "Image", pagination });
    return results;
  },
}));
