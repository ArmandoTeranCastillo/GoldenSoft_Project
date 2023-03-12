import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-purchaseOrder',
    templateUrl: 'purchaseOrder.component.html',
    styleUrls: ['purchaseOrder.component.scss']
})
export class PurchaseOrderComponent implements OnInit {
    purchaseorder;
    inventory;

    
    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.fetchPurchaseOrder();
        this.fetchInventory();
    }

    fetchPurchaseOrder(){
        this.publicService.fetchPurchaseOrder().subscribe(
            response => this.purchaseorder = response,
            error => console.log(error)
        )
    }

    fetchInventory(){
        this.publicService.fetchInventory().subscribe(
            response => this.inventory = response,
            error => console.log(error)
        )
    }

    getInventory(){
        this.publicService.getInventory().subscribe(
            response => this.inventory = response,
            error => console.log(error)
            ) 
    }

    getPurchaseOrder(){
        this.publicService.getPurchaseOrder().subscribe(
            response => this.purchaseorder = response,
            error => console.log(error)
            )  
    }

    createPurchaseOrder(e){
        const producer = e.data.producer;
        const dateOrder = e.data.dateOrder;
        const inventoryId = e.data.inventoryId;

        const dataToSend = {
            producer,
            dateOrder,
            inventoryId
        }

        console.log(dataToSend)

        this.publicService.createPurchaseOrder(dataToSend).subscribe(
            response => {
                console.log(response);
                this.getPurchaseOrder();
                e.component.refresh();
            }
          )
      
    }

    updatePurchaseOrder(e){
        this.publicService.updatePurchaseOrder(e.data).subscribe(
            response => {
                console.log(response);
                e.component.refresh();
            }
        )
    }

    deletePurchaseOrder(e){
        this.publicService.deletePurchaseOrder(e.data.id).subscribe(
            response => {
                console.log(response)
            }
        )
    }
}