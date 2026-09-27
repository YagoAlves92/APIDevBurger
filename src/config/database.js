require('dotenv').config();



module.exports = {

    dialect: 'postgres',

    url: process.env.DATABASE_URL,

    stripeSecretKey: process.env.STRIPE_KEY,

    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },

}