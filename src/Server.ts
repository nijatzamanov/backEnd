import * as http from 'http';
import { jsonHeader, textHeader, statusCodes } from './model/Headers';
import DataService from './DataService';

export default class Server {

    private incomingMessage: http.IncomingMessage;
    private serverResponse: http.ServerResponse
    private dataService: DataService;

    constructor() {
        this.dataService = new DataService();
    }

    public createServer() {
        http.createServer((req, res) => {
            this.incomingMessage = req;
            this.serverResponse = res;
            this.respond();
        }).listen(8080);
    }

    private respond() {
        const url = this.incomingMessage.url;
        switch (url) {
            case '/allemployees':
                this.serverResponse.writeHead(statusCodes.OK, jsonHeader);
                this.serverResponse.end(JSON.stringify(this.dataService.getAllEmployyes()));
                break;
            case '/juniors':
                this.serverResponse.writeHead(statusCodes.OK, jsonHeader);
                this.serverResponse.end(JSON.stringify(this.dataService.getJuniors()));
                break;
            case '/programmers':
                this.serverResponse.writeHead(statusCodes.OK, jsonHeader);
                this.serverResponse.end(JSON.stringify(this.dataService.getProgrammers()));
                break;
            case '/engineers':
                this.serverResponse.writeHead(statusCodes.OK, jsonHeader);
                this.serverResponse.end(JSON.stringify(this.dataService.getEngineers()));
                break;
            case '/experts':
                this.serverResponse.writeHead(statusCodes.OK, jsonHeader);
                this.serverResponse.end(JSON.stringify(this.dataService.getExperts()));
                break;
            case '/managers':
                this.serverResponse.writeHead(statusCodes.OK, jsonHeader);
                this.serverResponse.end(JSON.stringify(this.dataService.getManagers()));
                break;
            case '/admins':
                const all = this.dataService.getAllEmployyes();
                const admins = this.dataService.withAdmin(all, true);
                this.serverResponse.writeHead(statusCodes.OK, jsonHeader);
                this.serverResponse.end(JSON.stringify(admins));
                break;
            case '/nonadmins':
                const all2 = this.dataService.getAllEmployyes();
                const nonAdmins = this.dataService.withAdmin(all2, false);
                this.serverResponse.writeHead(statusCodes.OK, jsonHeader);
                this.serverResponse.end(JSON.stringify(nonAdmins));
                break;
            default:
                this.serverResponse.writeHead(statusCodes.NOT_FOUND, textHeader);
                this.serverResponse.end('Page not found!');
                break;
        }

    }

}

new Server().createServer();
