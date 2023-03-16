import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InventoryComponent } from "../components/inventory/inventory.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "src/app/core/shared/components/not-found/not-found.component";
import { ClientComponent } from "../components/client/client.component";
import { CaliberComponent } from "../components/caliber/caliber.component";
import { VarietyComponent } from "../components/variety/variety.component";
import { QualityComponent } from "../components/quality/quality.component";
import { TypeBoxComponent } from "../components/typebox/typebox.component";
import { PurchaseOrderComponent } from "../components/purchaseOrder/purchaseOrder.component";
import { PurchaseDetailsComponent } from "../components/purchaseDetails/purchaseDetails.component";
import { InventoryIssuesComponent } from "../components/inventoryIssues/inventoryIssues.component";
import { InventoryReasonIssuesComponent } from "../components/inventoryReasonIssues/inventoryReasonIssues.component";
import { BarcodeComponent } from "../components/barcode/barcode.component";
import { VigilanteGuard } from "src/app/vigilante.guard";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: '', redirectTo: 'inventory', pathMatch: 'full'},
            {path: 'inventory', component: InventoryComponent, canActivate: [VigilanteGuard]},
            {path: 'client', component: ClientComponent, canActivate: [VigilanteGuard]},
            {path: 'caliber', component: CaliberComponent, canActivate: [VigilanteGuard]},
            {path: 'variety', component: VarietyComponent, canActivate: [VigilanteGuard]},
            {path: 'quality', component: QualityComponent, canActivate: [VigilanteGuard]},
            {path: 'typebox', component: TypeBoxComponent, canActivate: [VigilanteGuard]},
            {path: 'purchaseOrder', component: PurchaseOrderComponent, canActivate: [VigilanteGuard]},
            {path: 'purchaseDetails', component: PurchaseDetailsComponent, canActivate: [VigilanteGuard]},
            {path: 'inventoryIssues', component: InventoryIssuesComponent, canActivate: [VigilanteGuard]},
            {path: 'inventoryReasonIssues', component: InventoryReasonIssuesComponent, canActivate: [VigilanteGuard]},
            {path: 'barcode', component: BarcodeComponent, canActivate: [VigilanteGuard]},
            {path: '**', component: NotFoundComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomeRoutingModule {}