import http from "http";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    const url =new URL(req.url, `https://${req.headers.host}`);
    console.log(req.url);// uers?name=lena
    console.log(req.headers.host);// localhost:9000
    const name = url.searchParams.get("name");
    res.write(`Hello, ${name}!`)
    res.end();
})

server.listen(port, () => {
    console.log(`Listening on port ${port}. Press CTRL+C to finish.`);
})