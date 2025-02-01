import express from "express"
import cors from "cors"
import main from "./initDB/index.js"
import chatRouter from "./routes/chat.js"
const app = express();
const port = 8080

main();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/",chatRouter);

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
})
