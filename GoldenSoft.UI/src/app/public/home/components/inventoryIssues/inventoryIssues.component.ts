import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-inventoryIssues',
    templateUrl: 'inventoryIssues.component.html',
    styleUrls: ['inventoryIssues.component.scss']
})
export class InventoryIssuesComponent implements OnInit{
    inventory;
    inventoryissues;
    inventoryreasonissues;

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getInventoryIssues();
        this.getInventoryReasonIssues();
        this.getInventory();
    }

    getInventoryIssues(){
        this.publicService.getInventoryIssues().subscribe(
            response => this.inventoryissues = response,
            error => console.log(error)
            ) 
    }

    getInventoryReasonIssues(){
        this.publicService.getInventoryReasonIssues().subscribe(
            response => this.inventoryreasonissues = response,
            error => console.log(error)
            ) 
    }

    getInventory(){
        this.publicService.getInventory().subscribe(
            response => this.inventory = response,
            error => console.log(error)
            ) 
    }

    createInventoryIssues(e){
        const {
            numberIssues,
            dateIssue,
            inventoryId
        } = e.data

        const reasonIssuesId = e.data.reasonIssues.id

        const dataToSend = {
            numberIssues,
            dateIssue,
            inventoryId,
            reasonIssuesId
        }

        this.publicService.createInventoryIssues(dataToSend).subscribe(
            response => {
                console.log(response);
            }
          )
    }

    updateInventoryIssues(e){
        const {
            id,
            numberIssues,
            dateIssue,
            inventoryId
        } = e.data

        const reasonIssuesId = e.data.reasonIssues.id

        const dataToSend = {
            id,
            numberIssues,
            inventoryId,
            dateIssue,
            reasonIssuesId
        }

        this.publicService.updateInventoryIssues(dataToSend).subscribe(
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