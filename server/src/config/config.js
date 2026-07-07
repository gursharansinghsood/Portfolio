import dotenv from 'dotenv'

dotenv.config()

const requiredEnvVar = ["PORT", "EMAIL_USER", "EMAIL_PASS", "CLIENT_URL"]

for (const envVar of requiredEnvVar) {
    if (!process.env[envVar]) {
        console.log("missing envVar", envVar)
        process.exit(1)
    }
}

const config = {
    port: process.env.PORT,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    clientUrl: process.env.CLIENT_URL
}

export default config