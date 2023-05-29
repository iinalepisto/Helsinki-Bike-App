import dotenv from "dotenv";
import "./database/db.js";
import startMongoDB from "./database/db.js";
import createServer from "./server.js";

dotenv.config();

const app = createServer();

const port = process.env.PORT || 8000;

app.listen(port, async () => {
    console.log(`Server running on port: ${port}`);

    await startMongoDB();
})