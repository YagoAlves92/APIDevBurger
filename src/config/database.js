require('dotenv').config();



module.exports = {

    dialect: 'postgres',

    url: process.env.DATABASE_URL,

    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },

    stripeSecretKey: process.env.STRIPE_KEY,

    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },

}