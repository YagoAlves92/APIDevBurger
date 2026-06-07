module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    stripeSecretKey: process.env.STRIPE_KEY,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },



}