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
    sanitizerBarcode;

    data;
    batchfield;
    palletfield;
    caliberfield;
    varietyfield;
    qualityfield;
    typeboxfield;

    batchvalue;
    palletvalue;
    calibervalue;
    varietyvalue;
    qualityvalue;
    typeboxvalue;

    generateValue;


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

    @ViewChild('barcode') bcode!: ElementRef;

    printImage(){
        try{
            this.printerService.printDiv('barcode');
        }
        catch{
            console.log('impresion cancelada')
        }
            
    }

    readBarcode(e){
        setTimeout(() => {
            console.log(e.target.value)
          }, 1000);
    }

    ngOnInit(): void {
        this.getCaliber();
        this.getVariety();
        this.getQuality();
        this.getTypeBox();
    }

    
    changeBatch(e: any){
        if (e.value === "" || e.value === null){
            this.batchvalue = false
        } else {
            this.batchvalue = true;
            console.log(this.batchvalue)
        } 
    }
    changePallet(e: any){
        if (e.value === "" || e.value === null){
            this.palletvalue = false
        } else {
            this.palletvalue = true;
            console.log(this.palletvalue)
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

    getBarcode(){
        this.batchfield = this.dxbatch.instance.option('value') + "A";
        this.palletfield = this.dxpallet.instance.option('value') + "A";
        this.caliberfield = this.dxcaliber.value.id + "A";
        this.varietyfield = this.dxvariety.value.id + "A";
        this.qualityfield = this.dxquality.value.id + "A";
        this.typeboxfield = this.dxtypebox.value.id;
        
        this.data = this.batchfield + 
                    this.palletfield + 
                    this.caliberfield + 
                    this.varietyfield +
                    this.qualityfield +
                    this.typeboxfield

        console.log(this.data)
        this.publicService.getBarcode(this.data).subscribe(
            (blob: Blob) => {this.barcode = URL.createObjectURL(blob);
            this.sanitizerBarcode = this.sanitizer.bypassSecurityTrustUrl(this.barcode);
            });
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



}

