import { NgModule} from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { SharedModule } from "../core/shared/shared.module";
import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/containers/home.component";
import { LoginComponent } from "./login/login.component";
import { HomeRoutingModule } from "./home/containers/home.routing.module";
import { InventoryComponent } from "./home/components/inventory/inventory.component";
import { PublicService } from "./public.service";
import { ClientComponent } from "./home/components/client/client.component";
import { CaliberComponent } from "./home/components/caliber/caliber.component";
import { VarietyComponent } from "./home/components/variety/variety.component";
import { QualityComponent } from "./home/components/quality/quality.component";
import { TypeBoxComponent } from "./home/components/typebox/typebox.component";
import { PurchaseOrderComponent } from "./home/components/purchaseOrder/purchaseOrder.component";
import { PurchaseDetailsComponent } from "./home/components/purchaseDetails/purchaseDetails.component";
import { InventoryIssuesComponent } from "./home/components/inventoryIssues/inventoryIssues.component";
import { InventoryReasonIssuesComponent } from "./home/components/inventoryReasonIssues/inventoryReasonIssues.component";
import { BarcodeComponent } from "./home/components/barcode/barcode.component";
import { VigilanteGuard } from "../vigilante.guard";

import { UserHomeComponent } from "./home/containers/userhome/userhome.component";
import { UserHomeRoutingModule } from "./home/containers/userhome/userhome.routing.module";
//Estructura básica para la creación de Modulos (Porciones de código)
@NgModule({
    imports: [
        PublicRoutingModule,
        HomeRoutingModule,
        SharedModule,
        UserHomeRoutingModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        LoginComponent,
        InventoryComponent,
        ClientComponent,
        CaliberComponent,
        VarietyComponent,
        QualityComponent,
        TypeBoxComponent,
        PurchaseOrderComponent,
        PurchaseDetailsComponent,
        InventoryIssuesComponent,
        InventoryReasonIssuesComponent,
        BarcodeComponent,
        UserHomeComponent
      
    ],
    exports: [],
    providers: [
        PublicService
    ]
})

export class PublicModule{
    constructor() {}
}