import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-inventoryIssues',
    templateUrl: 'inventoryIssues.component.html',
    styleUrls: ['inventoryIssues.component.scss']
})
export class InventoryIssuesComponent implements OnInit{
    inventoryissues;

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getInventoryIssues();
    }

    getInventoryIssues(){
        this.publicService.getInventoryIssues().subscribe(
            response => this.inventoryissues = response,
            error => console.log(error)
            ) 
    }

    createInventoryIssues(e){
        this.publicService.createInventoryIssues(e.data).subscribe(
            response => {
                console.log(response);
            }
          )
    }

    updateInventoryIssues(e){
        this.publicService.updateInventoryIssues(e.data).subscribe(
            response => {
                console.log(response);
            }
        )
    }

    deleteInventoryIssues(e){
        this.publicService.deleteInventoryIssues(e.data.id).subscribe(
            response => {
                console.log(response)
            }
        )
    }
}