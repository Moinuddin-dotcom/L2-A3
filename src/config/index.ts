import dotenv from 'dotenv';
// import path from 'path';

dotenv.config()

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL
}