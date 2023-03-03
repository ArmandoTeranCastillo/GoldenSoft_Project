import { Component, OnInit, Sanitizer } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { PublicService } from "src/app/public/public.service";


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

    box = {
        lote: '',
        tarima: '',    
    }


    constructor(private publicService: PublicService, private sanitizer: DomSanitizer){}

    ngOnInit(): void {
        this.getBarcode();
        this.getCaliber();
        this.getVariety();
        this.getQuality();
        this.getTypeBox();
    }

    getBarcode(){
        this.publicService.getBarcode().subscribe(
            (blob: Blob) => {this.barcode = URL.createObjectURL(blob);
            this.sanitizerBarcode = this.sanitizer.bypassSecurityTrustUrl(this.barcode);
            });
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

