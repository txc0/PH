import { IncomingMessage, ServerResponse } from 'http';
import productController from '../controller/product.controller';

const routeHandler = (req: IncomingMessage, res: ServerResponse) => { //?
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
    else if (url?.startsWith("/products")){
        productController(req, res);
    }
    else{
        // console.log("this route is not defined");
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("<h1>404 Not Found</h1>");
    }
};


export default routeHandler;