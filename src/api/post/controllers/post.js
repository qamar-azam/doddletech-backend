"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    const query = {
      filters: { slug },
      populate: "Images",
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::post.post", query);
    const sanitizedEntity = await this.sanitizeOutput(post);
    return sanitizedEntity[0];
  },
  async find(ctx) {
    const { results } = await strapi
      .service("api::post.post")
      .find({ populate: "Images" });
    return results;
  },
}));
