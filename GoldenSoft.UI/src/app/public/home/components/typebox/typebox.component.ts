import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public.service";

@Component({
    selector: 'app-typebox',
    templateUrl: 'typebox.component.html',
    styleUrls: ['typebox.component.scss']
})
export class TypeBoxComponent implements OnInit {
    typebox;

    constructor(private publicService: PublicService) {}

    ngOnInit(): void {
        this.getTypeBox();
    }

    getTypeBox(){
        this.publicService.getTypeBox().subscribe(
            response => this.typebox = response,
            error => console.log(error)
            )  
    }

    createTypeBox(e){
        this.publicService.createTypeBox(e.data).subscribe(
            response => {
                console.log(response);
            }
          )
    }

    updateTypeBox(e){
        this.publicService.updateTypeBox(e.data).subscribe(
            response => {
                console.log(response);
            }
        )
    }

    deleteTypeBox(e){
        this.publicService.deleteTypeBox(e.data.id).subscribe(
            response => {
                console.log(response)
            }
        )
    }
}