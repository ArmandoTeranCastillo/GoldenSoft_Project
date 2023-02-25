import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-purchaseOrder',
    templateUrl: 'purchaseOrder.component.html',
    styleUrls: ['purchaseOrder.component.scss']
})
export class PurchaseOrderComponent implements OnInit {
    purchaseorder;

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getPurchaseOrder();
    }

    getPurchaseOrder(){
        this.publicService.getPurchaseOrder().subscribe(
            response => this.purchaseorder = response,
            error => console.log(error)
            )  
    }

    createPurchaseOrder(e){
        this.publicService.createPurchaseOrder(e.data).subscribe(
            response => {
                console.log(response);
            }
          )
    }

    updatePurchaseOrder(e){
        this.publicService.updatePurchaseOrder(e.data).subscribe(
            response => {
                console.log(response);
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