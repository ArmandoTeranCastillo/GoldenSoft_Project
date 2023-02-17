import { NgModule} from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { SharedModule } from "../core/shared/shared.module";
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/containers/home.component";
import { LoginComponent } from "./login/login.component";
import { HomeRoutingModule } from "./home/containers/home.routing.module";
import { InventoryComponent } from "./home/components/inventory/inventory.component";
//Estructura básica para la creación de Modulos (Porciones de código)
@NgModule({
    imports: [
        PublicRoutingModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        LoginComponent,
        InventoryComponent
      
    ],
    exports: [],
    providers: []
})

export class PublicModule{
    constructor() {}
}