import { IncomingMessage } from 'http';

export const bodyParser = async (req: IncomingMessage): Promise<any> => { //?bodyParser is a function that takes an IncomingMessage object as an argument and returns a Promise that resolves to the parsed body of the request. The function listens for data events on the request object and concatenates the chunks of data into a single string. Once the end event is emitted, the function attempts to parse the string as JSON and resolve the Promise with the parsed object. If there is an error during parsing, the Promise is rejected with the error.
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => { //? Listen for data events
            body += chunk;
        });
        req.on("end", () => { //? Listen for the end event
            try {
                const parsedBody = JSON.parse(body);
                resolve(parsedBody);
            } catch (error) {
                reject(error);
            }
        });
    }
)}

