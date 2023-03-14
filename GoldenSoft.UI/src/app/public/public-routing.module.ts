import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PublicComponent } from "./public.component";
import { HomeComponent } from "./home/containers/home.component";
import { LoginComponent } from "./login/login.component";
import { VigilanteGuard } from "../vigilante.guard";


const routes : Routes = [
    //Definir el componente padre
    { 
        path: '', 
        component: PublicComponent, 
        children:
        [ //Definir array de rutas
            {path:'', redirectTo: 'login', pathMatch: 'full'},    
            {path:'home', component: HomeComponent, canActivate: [VigilanteGuard]},
            {path:'login', component: LoginComponent},
        ]
    },
]; //Las rutas deben ser accesibles desde PublicModule

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class PublicRoutingModule {}