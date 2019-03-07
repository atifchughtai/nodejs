import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const apiUrl = process.env.API_URL;
export { port, apiUrl };
