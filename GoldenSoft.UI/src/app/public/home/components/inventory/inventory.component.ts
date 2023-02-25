import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-inventory',
    templateUrl: 'inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
    inventory;

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getInventory();
    }

    getInventory(){
        //Cuando el observable obtenga respuesta
        //Se podrá ejecutar la función
        this.publicService.getInventory().subscribe(
        response => this.inventory = response,
        error => console.log(error)
        )  
     }

    createInventory(e){
      this.publicService.createInventory(e.data).subscribe(
        response => {
            console.log(response);
        }
      )
    }

    updateInventory(e){
        this.publicService.updateInventory(e.data).subscribe(
            response => {
                console.log(response);
            }
        )
    }

    deleteInventory(e){
        this.publicService.deleteInventory(e.data.id).subscribe(
            response => {
                console.log(response)
            }
        )
    }
}