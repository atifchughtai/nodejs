import dotenv from 'dotenv/config';

// dotenv.config();

export default {
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT,
};
