import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "src/app/core/shared/components/not-found/not-found.component";
import { UserVigilanteGuard } from "src/app/user-vigilante.guard";
import { BarcodeComponent } from "../../components/barcode/barcode.component";
import { InventoryComponent } from "../../components/inventory/inventory.component";
import { InventoryIssuesComponent } from "../../components/inventoryIssues/inventoryIssues.component";
import { UserHomeComponent } from "./userhome.component";

const routes: Routes = [
    {
        path: 'userhome',
        component: UserHomeComponent,
        children: [
            {path: '', redirectTo: 'inventory', pathMatch: 'full'},
            {path: 'inventory', component: InventoryComponent, canActivate: [UserVigilanteGuard]},
            {path: 'inventoryIssues', component: InventoryIssuesComponent, canActivate: [UserVigilanteGuard]},
            {path: 'barcode', component: BarcodeComponent, canActivate: [UserVigilanteGuard]},
            {path: '**', component: NotFoundComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class UserHomeRoutingModule{}