const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("MYSQL_DATABASE_HOST", "127.0.0.1"),
      port: env.int("MYSQL_DATABASE_PORT", 3306),
      database: env("MYSQL_DATABASE_NAME", "strapi"),
      user: env("MYSQL_DATABASE_USERNAME", "strapi"),
      password: env("MYSQL_DATABASE_PASSWORD", ""),
    },
    debug: false,
  },
});
