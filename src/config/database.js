module.exports = {

    dialect: 'postgres',

    use_env_variable: 'DATABASE_URL',

    stripeSecretKey: process.env.STRIPE_KEY,

    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },

}