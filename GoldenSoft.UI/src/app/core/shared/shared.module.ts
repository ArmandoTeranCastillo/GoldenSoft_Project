import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"
import { RouterModule } from "@angular/router";
import { DxDrawerModule, DxFormModule, DxSelectBoxModule } from "devextreme-angular";
import { DxToolbarModule } from "devextreme-angular";
import { DxButtonModule } from "devextreme-angular";
import { DxListModule } from "devextreme-angular";
import { DxDataGridModule } from "devextreme-angular";


import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CommonModule } from "@angular/common";

//Estructura básica para la creación de Modulos (Porciones de código)
//Esta estructura es muy importante para globalizar modulos
//Ya que se pondran los modulos para que se globalizen en todo el proyecto
//Por medio de CoreModule, del cuál ShareModule es dependiente
@NgModule({
    imports: [
        HttpClientModule,
        RouterModule,
        CommonModule,
        DxDrawerModule,
        DxToolbarModule,
        DxButtonModule,
        DxListModule,
        DxDataGridModule,
        DxFormModule,
        DxSelectBoxModule,
    ],
    declarations: [
        NotFoundComponent
    ],
    exports: [
        HttpClientModule,
        RouterModule,
        DxDrawerModule,
        DxToolbarModule,
        DxButtonModule,
        DxListModule,
        DxDataGridModule,
        DxFormModule,
        DxSelectBoxModule,
        NotFoundComponent
    ],
    providers: []
})

export class SharedModule{
    constructor() {}
}