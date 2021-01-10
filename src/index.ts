import express from 'express';
import calculate from './Calculator';
const app: express.Application = express();

app.use(express.urlencoded());

app.get("/", (req: express.Request, res: express.Response) => {
    res.json({
        message: "Hello World!"
    });
});

app.get("/calculate", async (req: express.Request, res: express.Response) => {
    const {
        expression
    } = req.query;
    if (expression && expression as string) {
        await calculate(expression as string)
            .then((result) => res.json({
                expression,
                result
            }))
            .catch((err) => res.status(400).json({
                message: `Invalid Expression : ${expression}`
            }));
    } else {
        res.status(400).json({
            message: `Invalid Expression : ${expression}`
        });
    }
});

app.listen(3000, () => console.log("Server Start..."));