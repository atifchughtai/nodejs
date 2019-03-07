import { port, apiUrl } from "./config";
import app from "./src/app";
console.log(port);
const serverOptions = {
   port,
   endpoint: "/graphql",
   playground: "/docs",
   tracing: true,
   debug: true
};

app.start(serverOptions, ({ port }) => console.log(`Server on port ${port}`));
