import http from "http";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     res.end('<h1>Hello NODE!</h1>');
// })

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    if(req.url==='/user'){
        res.write('<h1>Hello User!</h1>');
    }
    if(req.url==='/user/group'){
        res.write('<h1>Hello Group!</h1>');
    }
    res.end();
})


server.listen(port, () => {
    console.log(`Listening on port ${port}. Press CTRL+C to finish.`);
})