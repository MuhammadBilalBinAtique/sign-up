import express from "express";
import {dbConnect} from "./connect.js";
import routes from "./routes.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    dbConnect();
    routes(app);
});
