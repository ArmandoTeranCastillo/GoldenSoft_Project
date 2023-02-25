import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-variety',
    templateUrl: 'variety.component.html',
    styleUrls: ['variety.component.scss']
})
export class VarietyComponent implements OnInit {
    variety;

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getVariety();
    }

    getVariety(){
        this.publicService.getVariety().subscribe(
            response => this.variety = response,
            error => console.log(error)
            ) 
    }

    createVariety(e){
        this.publicService.createVariety(e.data).subscribe(
            response => {
                console.log(response);
            }
          )
    }

    updateVariety(e){
        this.publicService.updateVariety(e.data).subscribe(
            response => {
                console.log(response);
            }
        )
    }

    deleteVariety(e){
        this.publicService.deleteVariety(e.data.id).subscribe(
            response => {
                console.log(response)
            }
        )
    }
}