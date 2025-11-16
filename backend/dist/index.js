import express from 'express';
import { PORT } from './config/env.js';
import apiRouter from './routes/route.js';
import db from './config/db.js';
import cors from "cors";
const app = express();
app.use(cors({
    origin: "http://localhost:3000", // your Next.js frontend
    credentials: true,
}));
app.use(express.json());
app.use('/api', apiRouter);
//DevHelpers
app.post('/dtu', async (req, res) => {
    try {
        let user = "+919009908984";
        await db.farmer.delete({
            where: {
                mobileNumber: user
            }
        });
        console.log("Deletion Sucess");
        res.json({
            msg: "OK"
        });
    }
    catch (error) {
        console.log("error in delete");
    }
});
app.listen(PORT, () => {
    console.log("Server started at PORT", PORT);
});
//# sourceMappingURL=index.js.map