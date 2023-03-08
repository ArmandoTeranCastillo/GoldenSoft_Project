import { Component, HostListener, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";
import {combineLatest, concat, forkJoin, map, merge, of, tap} from "rxjs"
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';


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

    interval;
    scannerEnabled = true;
    barcodeString = "";
    viewstock: any[] | undefined;

    titleBoxes = {
        text: 'No.Cajas(Entrada)',
    };
    titleIssues = {
        text: 'No.Cajas(Salida)',
    };

    constructor(private publicService: PublicService) {
        
    }

    ngOnInit(): void {
        this.getInventory();
        this.getCalibers();
        this.getVariety();  
        this.getQuality(); 
        this.getTypeBox();
        this.getClient();
        this.getPurchaseOrder();
      
    }

    @HostListener('document:keydown', ['$event'])
    onBarcodeScanned(event: KeyboardEvent) {
        if(this.interval){
            clearInterval(this.interval);
        }
        if(event.code === "Enter"){
            if(this.barcodeString){
                this.handleBarcode(this.barcodeString);
            this.barcodeString = "";
            return;
            }
        }
        if(event.key !== "Shift"){
            this.barcodeString += event.key;
        }
        this.interval = setInterval(() => this.barcodeString = "", 20);
    }    
    

    handleBarcode(barcode){
        console.log(barcode);
    }

    exportData(e){
        if (e.format === 'xlsx') {
            const workbook = new Workbook(); 
            const worksheet = workbook.addWorksheet("Main sheet"); 
            exportDataGrid({ 
                worksheet: worksheet, 
                component: e.component,
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer) { 
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
                }); 
            }); 
            e.cancel = true;
        }
        else if (e.format === 'pdf') {
            const doc = new jsPDF();
            exportDataGridToPdf({
                jsPDFDocument: doc,
                component: e.component,
            }).then(() => {
                doc.save('DataGrid.pdf');
            });
        }
    }

    getInventory(){
        //Cuando el observable obtenga respuesta
        //Se podrá ejecutar la función
        this.publicService.getInventory().subscribe(
        response => this.inventory = response,
        error => console.log(error)
        ) 
     }

   prepareForm(e: any){
    e.form.option('inventory').stock = e.row.data.stock;
   }

   getStockColumn(rowData){
      return rowData.stock;
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
      };

      this.publicService.createInventory(dataToSend).subscribe(
        response => {
            console.log(response);
            this.getInventory();
            e.component.refresh();
        }
      )
      
    }

    async updateInventory(e){
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
          };
        
        await this.publicService.updateInventory(dataToSend).subscribe(
            response => {
                console.log(response);
                this.getInventory();
                e.component.refresh();
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