module.exports = {
  development: {
    client: "pg",
    connection: "postgres:///laptopsdb"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
