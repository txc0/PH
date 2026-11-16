import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server : Server = createServer((req : IncomingMessage, res : ServerResponse) => {
    // console.log("request:" ,req);
    // console.log("response:" ,res);
    // console.log("request url:", req.url);
    // console.log("request method:", req.method);
    const url = req.url;
    const method = req.method;
    console.log("request url:", url);
    console.log("request method:", method);
    if (url === "/" && method === "GET") {
        // console.log("this route is root route"); //* Know more form node js documentation
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("<h1>Welcome to the root route</h1>");
    }
    else{
        // console.log("this route is not defined");
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("<h1>404 Not Found</h1>");
    }
});
server.listen(3000, () => {
    console.log("Server running on port 3000");
});