import dotenv from 'dotenv';
dotenv.config()

const config = {
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    },
    port : process.env.DB_PORT
}

export default config;