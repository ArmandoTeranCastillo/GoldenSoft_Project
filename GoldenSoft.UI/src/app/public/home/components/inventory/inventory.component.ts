import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { PublicService } from "src/app/public/public.service";
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import { DxDataGridComponent } from "devextreme-angular";
import notify from "devextreme/ui/notify";


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

    interval;
    scannerEnabled = true;
    barcodeString = "";

    titleBoxes = {
        text: 'No.Cajas(Entrada)',
    };
    titleIssues = {
        text: 'No.Cajas(Salida)',
    };

    @ViewChild('dataGrid', {static: false}) dataGrid!: DxDataGridComponent;

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getInventory();
        this.fetchCalibers();
        this.fetchVariety();  
        this.fetchQuality(); 
        this.fetchTypeBox();
        this.fetchClient();
    }

    getInventory(){
        this.publicService.getInventory().subscribe(
            response => this.inventory = response,
        )
    }

    fetchInventory(){
        this.publicService.fetchInventory().subscribe(
            response => this.inventory = response,
        )
    }

   getStockColumn(rowData){
      return rowData.stock;
    }
    

    fetchCalibers(){
        this.publicService.fetchCalibers().subscribe(
            response => this.calibers = response,
        )
    }

    fetchVariety(){
        this.publicService.fetchVariety().subscribe(
            response => this.variety = response,
        )
    }

    fetchQuality(){
        this.publicService.fetchQuality().subscribe(
            response => this.quality = response,
        )
    }

    fetchTypeBox(){
        this.publicService.fetchTypeBox().subscribe(
            response => this.typebox = response,
        )
    }

    fetchClient(){
        this.publicService.fetchClients().subscribe(
            response => this.client = response,
        )
    }

    createInventory(e){
        const numberPallet = e.data.numberPallet;
        const numberBatch = e.data.numberBatch;
        const date = e.data.date;
        const numberBoxes = e.data.noBoxes;
        const barcode = e.data.barcode;
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
              notify('Registro Creado', 'success', 3000);
          }
        )    
    }

      updateInventory(e){
          const Id = e.data.inventoryId;
          const numberBatch = e.data.numberBatch;
          const numberPallet = e.data.numberPallet;
          const date = e.data.date;
          const numberBoxes = e.data.noBoxes;
          const barcode = e.data.barcode;
          const caliberId = e.data.caliber.id;
          const varietyId = e.data.variety.id;
          const qualityId = e.data.quality.id;
          const typeboxId = e.data.typeBox.id;
          const clientId = e.data.client.id;
    
          const dataToSend = {
            Id,
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
        
        this.publicService.updateInventory(dataToSend).subscribe(
            response => {
                console.log(response);
                this.getInventory();
                e.component.refresh();
                notify('Registro Actualizado', 'success', 3000);
            }
        )   
    }

    deleteInventory(e){
        this.publicService.deleteInventory(e.data.inventoryId).subscribe(
            response => {
                console.log(response)
                notify("Registro Eliminado", "success", 3000);
            }
        )
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
        const barcodeString = barcode;
        const barcodeArray = barcode.split("A")
        const rowKey = this.inventory.find((rowKey) => rowKey.barcode === barcodeString);
        

        if(rowKey){
            const date = new Date();
            date.setHours(0,0,0,0);
            
            this.updateInventoryFromBarcode(
            rowKey.inventoryId,
            rowKey.numberBatch,
            rowKey.numberPallet,
            date,
            rowKey.noBoxes + 1,
            rowKey.barcode,
            rowKey.caliber,
            rowKey.variety,
            rowKey.quality,
            rowKey.typeBox,
            rowKey.client
             ); 
        }
        else{
            const date = new Date();
            date.setHours(0,0,0,0);
        
            // Agregar una nueva fila al grid
            this.createInventoryFromBarcode(
                parseInt(barcodeArray[0]), 
                parseInt(barcodeArray[1]), 
                1, 
                date.toISOString().substring(0, 10), 
                barcodeString,
                parseInt(barcodeArray[2]),
                parseInt(barcodeArray[3]),
                parseInt(barcodeArray[4]),
                parseInt(barcodeArray[5]),
                parseInt(barcodeArray[6]) 
            );
        }
        
    }

    updateInventoryFromBarcode(id, numberBatch, numberPallet, date, noBoxes, barcode, caliber, variety, quality, typebox, client){
        const caliberId = caliber['id'];
        const varietyId = variety['id'];
        const qualityId = quality['id'];
        const typeboxId = typebox['id'];
        const clientId = client['id'];
        const numberBoxes = noBoxes;
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
        }

    
        this.publicService.updateInventory(dataToSend).subscribe(
            response => {
                console.log(response);
                this.getInventory();
                this.dataGrid.instance.refresh();
                notify("Registro Actualizado", "success", 3000);
            }
        )

    }

    createInventoryFromBarcode(numberBatch, numberPallet, numberBoxes, date, barcode, caliberId, varietyId, qualityId, typeboxId, clientId){
       
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
                this.dataGrid.instance.refresh();
                notify("Registro Creado", "success", 3000);
            }
          )
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
    
    
}