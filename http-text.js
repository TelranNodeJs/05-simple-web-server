import http from "http";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    res.end('<h1>Hello world!</h1>');
})

server.listen(port, () => {
    console.log(`Listening on port ${port}. Press CTRL+C to finish.`);
})