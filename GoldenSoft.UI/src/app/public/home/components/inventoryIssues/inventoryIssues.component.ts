import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { DxDataGridComponent } from "devextreme-angular";
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
    interval;
    barcodeString = "";
    gridInstance;

    @ViewChild('dataGrid', {static: false}) grid!: DxDataGridComponent;
    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getInventoryIssues();
        this.fetchInventoryReasonIssues();
        this.getInventory();
    }

    fetchInventoryIssues(){
        this.publicService.fetchInventoryIssues().subscribe(
            response => this.inventoryissues = response,
            error => console.log(error)
        )
    }

    fetchInventoryReasonIssues(){
        this.publicService.fetchInventoryReasonIssues().subscribe(
            response => this.inventoryreasonissues = response,
            error => console.log(error)
        )
    }

    fetchInventory(){
        this.publicService.fetchInventory().subscribe(
            response => this.inventory = response,
            error => console.log(error)
        )
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
        const barcodeArray = barcode.split("A");
        const register = this.inventory.find((register) => register.barcode === barcodeString);
        var Id = -1;
        if(register){
            Id = register.inventoryId;
        }

        if(Id !== -1){
            const rowIssue = this.inventoryissues.find((rowIssue) => rowIssue.inventoryId === Id);
            if(rowIssue){
            const date = new Date();
            date.setHours(0,0,0,0);
            this.updateInventoryIssuesFromBarcode(
                rowIssue.id,
                rowIssue.numberIssues + 1,
                date,
                rowIssue.inventoryId,
                rowIssue.reasonIssuesId)
            }else{
              const date = new Date();
              date.setHours(0,0,0,0);
              this.createInventoryIssuesFromBarcode(
                1,
                date,
                Id,
                1
              )  
            }
            
        }
    }

    createInventoryIssuesFromBarcode(numberIssues, dateIssue, inventoryId, reasonIssuesId){
        const dataToSend = {
            numberIssues,
            dateIssue,
            inventoryId,
            reasonIssuesId
        }

        this.publicService.createInventoryIssues(dataToSend).subscribe(
            response => {
                console.log(response);
                this.getInventoryIssues();
                this.grid.instance.refresh();
            }
          )
    }

    

    updateInventoryIssuesFromBarcode(Id, numberIssues, dateIssue, inventoryId, reasonIssuesId){
        const dataToSend = {
            Id,
            numberIssues,
            dateIssue,
            inventoryId,
            reasonIssuesId
        }

        this.publicService.updateInventoryIssues(dataToSend).subscribe(
            response => {
                console.log(response);
                this.getInventoryIssues();
                this.grid.instance.refresh();
            }
        )
    }
}