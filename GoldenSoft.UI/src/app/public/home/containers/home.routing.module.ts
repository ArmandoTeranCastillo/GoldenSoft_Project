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

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: '', redirectTo: 'inventory', pathMatch: 'full'},
            {path: 'inventory', component: InventoryComponent},
            {path: 'client', component: ClientComponent},
            {path: 'caliber', component: CaliberComponent},
            {path: 'variety', component: VarietyComponent},
            {path: 'quality', component: QualityComponent},
            {path: 'typebox', component: TypeBoxComponent},
            {path: 'purchaseOrder', component: PurchaseOrderComponent},
            {path: 'purchaseDetails', component: PurchaseDetailsComponent},
            {path: 'inventoryIssues', component: InventoryIssuesComponent},
            {path: 'inventoryReasonIssues', component: InventoryReasonIssuesComponent},
            {path: 'barcode', component: BarcodeComponent},
            {path: '**', component: NotFoundComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomeRoutingModule {}