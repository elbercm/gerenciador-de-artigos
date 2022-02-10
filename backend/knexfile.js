module.exports = {
  client: "postgresql",
  connection: {
    database: "knowledge",
    user: "postgres",
    // password: "corr1da",
    password: "123456",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
