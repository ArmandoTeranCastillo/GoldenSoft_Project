import { Component, ElementRef, HostListener, OnInit, Sanitizer, ViewChild } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { DxFormComponent, DxSelectBoxComponent, DxTextBoxComponent } from "devextreme-angular";
import { PublicService } from "src/app/public/public.service";

import { NgxPrinterService } from "ngx-printer";




@Component({
    selector: 'app-barcode',
    templateUrl: 'barcode.component.html',
    styleUrls: ['barcode.component.scss']
})

export class BarcodeComponent implements OnInit {
    barcode;
    caliber;
    variety;
    quality;
    typebox;
    client;
    sanitizerBarcode;

    data;
    batchfield;
    palletfield;
    caliberfield;
    varietyfield;
    qualityfield;
    typeboxfield;
    clientfield;

    batchvalue;
    palletvalue;
    calibervalue;
    varietyvalue;
    qualityvalue;
    typeboxvalue;
    clientvalue;

    generateValue;

    isLoading = false;

    box = {
        lote: '',
        tarima: '',    
    };


    constructor(private publicService: PublicService, private sanitizer: DomSanitizer,
        private printerService: NgxPrinterService){  
    }

    @ViewChild('form', {static: false}) form!: DxFormComponent;
    @ViewChild('dxbatch') dxbatch!: DxTextBoxComponent;
    @ViewChild('dxpallet') dxpallet!: DxTextBoxComponent;
    @ViewChild('dxcaliber') dxcaliber!: DxSelectBoxComponent;
    @ViewChild('dxvariety') dxvariety!: DxSelectBoxComponent;
    @ViewChild('dxquality') dxquality!: DxSelectBoxComponent;
    @ViewChild('dxtypebox') dxtypebox!: DxSelectBoxComponent;
    @ViewChild('dxclient') dxclient!: DxSelectBoxComponent;
    @ViewChild('barcode') bcode!: ElementRef;

    printImage(){
        try{
            const printContent = document.getElementById('barcode');
            this.printerService.printAngular(printContent, {width: '80mm', height: '40mm', 'font-size': '20pt', margin: '0mm'});
        }
        catch{
            console.log('impresion cancelada')
        }
            
    }

    readBarcode(e){
        setTimeout(() => {
          }, 1000);
    }

    ngOnInit(): void {
        this.getCaliber();
        this.getVariety();
        this.getQuality();
        this.getTypeBox();
        this.getClient();
    }

    
    changeBatch(e: any){
        if (e.value === "" || e.value === null){
            this.batchvalue = false
        } else {
            this.batchvalue = true;
        } 
    }
    changePallet(e: any){
        if (e.value === "" || e.value === null){
            this.palletvalue = false
        } else {
            this.palletvalue = true;
        } 
    }
    changeCaliber(){
            this.calibervalue = true;
    }
    changeVariety(){
            this.varietyvalue = true;
    }
    changeQuality(){
            this.qualityvalue = true;
    }
    changeTypeBox(){
            this.typeboxvalue = true;
    }
    changeClient(){
        this.clientvalue = true;
    }

    getBarcode(){
        this.isLoading = true;
        this.batchfield = this.dxbatch.instance.option('value') + "A";
        this.palletfield = this.dxpallet.instance.option('value') + "A";
        this.caliberfield = this.dxcaliber.value.id + "A";
        this.varietyfield = this.dxvariety.value.id + "A";
        this.qualityfield = this.dxquality.value.id + "A";
        this.typeboxfield = this.dxtypebox.value.id + "A";
        this.clientfield = this.dxclient.value.id;
        
        this.data = this.batchfield + 
                    this.palletfield + 
                    this.caliberfield + 
                    this.varietyfield +
                    this.qualityfield +
                    this.typeboxfield +
                    this.clientfield

        console.log(this.data)
        this.publicService.getBarcode(this.data).subscribe(
            (blob: Blob) => {this.barcode = URL.createObjectURL(blob);
            this.sanitizerBarcode = this.sanitizer.bypassSecurityTrustUrl(this.barcode);
            }).add(() => this.isLoading = false);
        this.generateValue = true;
    }

    getCaliber(){
        this.publicService.getCalibers().subscribe(
            response => this.caliber = response,
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
}

