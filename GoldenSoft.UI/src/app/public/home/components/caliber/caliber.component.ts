import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-caliber',
    templateUrl: 'caliber.component.html',
    styleUrls: ['caliber.component.scss']
})
export class CaliberComponent implements OnInit {
    calibers;

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.fetchCalibers();
    }

    fetchCalibers(){
        this.publicService.fetchCalibers().subscribe(
            response => this.calibers = response,
            error => console.log(error)
        )
    }

    getCalibers(){
        this.publicService.getCalibers().subscribe(
            response => this.calibers = response,
            error => console.log(error)
            )  
    }

    createCaliber(e){
        this.publicService.createCaliber(e.data).subscribe(
            response => {
                console.log(response);
            }
          )
    }

    updateCaliber(e){
        this.publicService.updateCaliber(e.data).subscribe(
            response => {
                console.log(response);
            }
        )
    }

    deleteCaliber(e){
        this.publicService.deleteCaliber(e.data.id).subscribe(
            response => {
                console.log(response)
            }
        )
    }


}