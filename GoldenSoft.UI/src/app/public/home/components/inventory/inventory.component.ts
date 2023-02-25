import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-inventory',
    templateUrl: 'inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
    inventory;
    calibers;
    variety;
    quality;
    typebox;
    client;
    purchaseorder;

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getInventory();
        this.getCalibers();
        this.getVariety();  
        this.getQuality(); 
        this.getTypeBox();
        this.getClient();
        this.getPurchaseOrder();
    }

    getInventory(){
        //Cuando el observable obtenga respuesta
        //Se podrá ejecutar la función
        this.publicService.getInventory().subscribe(
        response => this.inventory = response,
        error => console.log(error)
        )  
     }

    getCalibers(){
        this.publicService.getCalibers().subscribe(
            response => this.calibers = response,
            error => console.log(error)
        )
    }

    getVariety(){
        this.publicService.getVariety().subscribe(
            response => this.variety = response,
            error => console.log(error)
        )
    }

    getQuality(){
        this.publicService.getQuality().subscribe(
            response => this.quality = response,
            error => console.log(error)
        )
    }

    getTypeBox(){
        this.publicService.getTypeBox().subscribe(
            response => this.typebox = response,
            error => console.log(error)
        )
    }

    getClient(){
        this.publicService.getClients().subscribe(
            response => this.client = response,
            error => console.log(error)
        )
    }

    getPurchaseOrder(){
        this.publicService.getPurchaseOrder().subscribe(
            response => this.purchaseorder = response,
            error => console.log(error)
        )
    }

    createInventory(e){
      const {
        numberPallet,
        numberBatch,
        date,
        numberBoxes,
        barcode,
    }  = e.data;

      const caliberId = e.data.caliber.id;
      const varietyId = e.data.variety.id;
      const qualityId = e.data.quality.id;
      const typeboxId = e.data.typeBox.id;
      const clientId = e.data.client.id;
      const purchaseorderId = e.data.purchaseOrder.id;

      const dataToSend = {
        numberPallet,
        numberBatch,
        date,
        numberBoxes,
        barcode,
        caliberId,
        varietyId,
        qualityId,
        typeboxId,
        clientId,
        purchaseorderId
      };

      this.publicService.createInventory(dataToSend).subscribe(
        response => {
            console.log(response);
        }
      )
    }

    updateInventory(e){
        const {
            id,
            numberPallet,
            numberBatch,
            date,
            numberBoxes,
            barcode,
        }  = e.data;
    
          const caliberId = e.data.caliber.id;
          const varietyId = e.data.variety.id;
          const qualityId = e.data.quality.id;
          const typeboxId = e.data.typeBox.id;
          const clientId = e.data.client.id;
          const purchaseorderId = e.data.purchaseOrder.id;
    
          const dataToSend = {
            id,
            numberPallet,
            numberBatch,
            date,
            numberBoxes,
            barcode,
            caliberId,
            varietyId,
            qualityId,
            typeboxId,
            clientId,
            purchaseorderId
          };

        this.publicService.updateInventory(dataToSend).subscribe(
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