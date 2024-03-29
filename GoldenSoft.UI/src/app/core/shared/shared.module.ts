import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"
import { RouterModule } from "@angular/router";
import { DxDateBoxModule, DxDrawerModule, DxFormModule, DxSelectBoxModule, DxTextBoxComponent, DxTextBoxModule, DxValidatorModule } from "devextreme-angular";
import { DxToolbarModule } from "devextreme-angular";
import { DxButtonModule } from "devextreme-angular";
import { DxListModule } from "devextreme-angular";
import { DxDataGridModule } from "devextreme-angular";
import { DxScrollViewModule } from "devextreme-angular";



import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CommonModule } from "@angular/common";
import { NgxPrinterModule } from "ngx-printer";
import { DxoLabelModule } from "devextreme-angular/ui/nested";
import { CookieModule } from "ngx-cookie";
import { VigilanteGuard } from "src/app/vigilante.guard";

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
        DxValidatorModule,
        DxTextBoxModule,
        DxDateBoxModule,
        DxScrollViewModule,
        CookieModule.withOptions(),
        NgxPrinterModule.forRoot({printOpenWindow: false}),
    ],
    declarations: [
        NotFoundComponent
    ],
    exports: [
        HttpClientModule,
        CommonModule,
        RouterModule,
        DxDrawerModule,
        DxToolbarModule,
        DxButtonModule,
        DxListModule,
        DxDataGridModule,
        DxFormModule,
        DxSelectBoxModule,
        DxScrollViewModule,
        DxTextBoxModule,
        DxValidatorModule,
        NgxPrinterModule,
        DxDateBoxModule,
        CookieModule,
        NotFoundComponent
    ],
    providers: [VigilanteGuard]
})

export class SharedModule{
    constructor() {}
}