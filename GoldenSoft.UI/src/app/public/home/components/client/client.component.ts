import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-client',
    templateUrl: 'client.component.html',
    styleUrls: ['client.component.scss']
})
export class ClientComponent implements OnInit {
    clients;
    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getClients();
    }

    getClients(){
        this.publicService.getClients().subscribe(
            response => this.clients = response,
            error => console.log(error)
            )  
    }

    createClients(e){
        this.publicService.createClients(e.data).subscribe(
          response => {
              console.log(response);
          }
        )
      }

    updateClient(e){
        this.publicService.updateClient(e.data).subscribe(
            response => {
                console.log(response);
            }
        )
    }

    deleteClient(e){
        this.publicService.deleteClient(e.data.id).subscribe(
            response => {
                console.log(response)
            }
        )
    }
}