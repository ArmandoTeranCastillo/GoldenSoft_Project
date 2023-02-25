import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-inventoryReasonIssues',
    templateUrl: 'inventoryReasonIssues.component.html',
    styleUrls: ['inventoryReasonIssues.component.scss']
})
export class InventoryReasonIssuesComponent implements OnInit {
    inventoryreasonissues;


    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getInventoryReasonIssues();
    }

    getInventoryReasonIssues(){
        this.publicService.getInventoryReasonIssues().subscribe(
            response => this.inventoryreasonissues = response,
            error => console.log(error)
            ) 
    }

    createInventoryReasonIssues(e){
        this.publicService.createInventoryReasonIssues(e.data).subscribe(
            response => {
                console.log(response);
            }
          )
    }

    updateInventoryReasonIssues(e){
        this.publicService.updateInventoryReasonIssues(e.data).subscribe(
            response => {
                console.log(response);
            }
        )
    }

    deleteInventoryReasonIssues(e){
        this.publicService.deleteInventoryReasonIssues(e.data.id).subscribe(
            response => {
                console.log(response)
            }
        )
    }
}