import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-userhome',
    templateUrl: 'userhome.component.html',
    styleUrls: ['./userhome.component.scss']
})

export class UserHomeComponent implements OnInit {

  navigation: any[] = [
    {id: 1, text: "Inventario", icon: "./assets/drawer/icons8-inventory-64.png", path: "userhome/inventory"},
    {id: 2, text: "Bajas de Inventario", icon: "./assets/drawer/icons8-envío-de-la-gota-50.png", path: "userhome/inventoryIssues"},
    {id: 3, text: "Generador de Código de Barras", icon: "./assets/drawer/icons8-código-de-barras-50.png", path: "userhome/barcode"}
]



constructor(private router : Router) { }

ngOnInit() {
    this.router.navigate(['/userhome', 'inventory'])
 }

 isDrawerOpen: boolean = false;
 buttonOptions: any = {
     icon: "./assets/drawer/icons8-menú-60.png",
     onClick: () => {
         this.isDrawerOpen = !this.isDrawerOpen
     }
 }

}