import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    CLIENT_URL: process.env.CLIENT_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME
}

// PORT = 3000
// MONGO_URI = mongodb+srv://nonconformistical_db_user:ZrU4otiOpjepXBEd@bantercluster.y7oyuab.mongodb.net/banter_db?appName=BanterCluster
// NODE_ENV = development
// JWT_SECRET = 1jd9cn39ahjf83jq84h6b3j7hd93u6
// RESEND_API_KEY = "re_XVbHqp7w_BN1TaTLGRSCiekLAGzNxpLVR"
// EMAIL_FROM = "onboarding@resend.dev"
// EMAIL_FROM_NAME = "Midgard"
// CLIENT_URL = http://localhost:5137auth