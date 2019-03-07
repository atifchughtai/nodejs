// const app = require("./src/app");
import app from './src/app';
import config from './src/config';
import Database from './src/services/Database';
console.log(config.mongoUrl);
Database.open({mongoUrl:config.mongoUrl}).then(()=>console.log('DB connected')).catch((err)=>console.log(err));

app.listen(config.port, () => console.log(`Listening on port http://localhost:${config.port}`));
