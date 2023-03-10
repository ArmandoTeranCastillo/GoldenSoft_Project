import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-purchaseDetails',
    templateUrl: 'purchaseDetails.component.html',
    styleUrls: ['purchaseDetails.component.scss']
})
export class PurchaseDetailsComponent implements OnInit {
    purchasedetails;
    purchaseorder;
    

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getPurchaseDetails();
        this.getPurchaseOrder();
       
    }

    fetchPurchaseDetails(){
        this.publicService.fetchPurchaseDetails().subscribe(
            response => this.purchasedetails = response,
            error => console.log(error)
        )
    }

    fetchPurchaseOrder(){
        this.publicService.fetchPurchaseOrder().subscribe(
            response => this.purchaseorder = response,
            error => console.log(error)
        )
    }

    getPurchaseDetails(){
        this.publicService.getPurchaseDetails().subscribe(
            response => this.purchasedetails = response,
            error => console.log(error)
            )  
    }

    getPurchaseOrder(){
        this.publicService.getPurchaseOrder().subscribe(
            response => this.purchaseorder = response,
            error => console.log(error)
            )  
    }

    createPurchaseDetails(e){
        this.publicService.createPurchaseDetails(e.data).subscribe(
            response => {
                console.log(response);
            }
          )
    }

    updatePurchaseDetails(e){
        this.publicService.updatePurchaseDetails(e.data).subscribe(
            response => {
                console.log(response);
            }
        )
    }

    deletePurchaseDetails(e){
        this.publicService.deletePurchaseDetails(e.data.id).subscribe(
            response => {
                console.log(response)
            }
        )
    }
}