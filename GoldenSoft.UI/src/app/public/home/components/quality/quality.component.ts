import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-quality',
    templateUrl: 'quality.component.html',
    styleUrls: ['quality.component.scss']
})
export class QualityComponent implements OnInit {
    quality;

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.fetchQuality();
    }

    fetchQuality(){
        this.publicService.fetchQuality().subscribe(
            response => this.quality = response,
            error => console.log(error)
        )
    }

    getQuality(){
        this.publicService.getQuality().subscribe(
            response => this.quality = response,
            error => console.log(error)
            ) 
    }

    createQuality(e){
        this.publicService.createQuality(e.data).subscribe(
            response => {
                console.log(response);
            }
          )
    }

    updateQuality(e){
        this.publicService.updateQuality(e.data).subscribe(
            response => {
                console.log(response);
            }
        )
    }

    deleteQuality(e){
        this.publicService.deleteQuality(e.data.id).subscribe(
            response => {
                console.log(response)
            }
        )
    }
}