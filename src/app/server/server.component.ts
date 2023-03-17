import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerCompnonet {
    serverID: number = 10;
    serverStatus: string = "offline";

    getServerStatus(): string {
        return this.serverStatus
    }
}
