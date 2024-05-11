module.exports = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    connectionString: process.env.DB_ACCESS
  },
  secret: process.env.SECRET
}; 