import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../public.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    

    navigation: any[] = [
        {id: 1, text: "Inventario", icon: "box", path: "home/inventory"},
        {id: 2, text: "Clientes", icon: "group", path: "home/client"},
        {id: 3, text: "Calibres", icon: "fields", path: "home/caliber"},
        {id: 4, text: "Variedades", icon: "smalliconslayout", path: "home/variety"},
        {id: 5, text: "Calidades", icon: "fieldchooser", path: "home/quality"},
        {id: 6, text: "Tipos de Caja", icon: "hierarchy", path: "home/typebox"},
        {id: 7, text: "Órdenes de Compra", icon: "importselected", path: "home/purchaseOrder"},
        {id: 8, text: "Detalles de las Compras", icon: "columnchooser", path: "home/purchaseDetails"},
        {id: 9, text: "Bajas de Inventario", icon: "exportpdf", path: "home/inventoryIssues"},
        {id: 10, text: "Razones de Bajas de Inventario", icon: "columnchooser", path: "home/inventoryReasonIssues"},
        {id: 11, text: "Generador de Código de Barras", icon: "tips", path: "home/barcode"}
    ]

    
    
    constructor(private router : Router) { }

    ngOnInit() {
        this.router.navigate(['/home', 'inventory'])
     }

     isDrawerOpen: boolean = false;
     buttonOptions: any = {
         icon: "menu",
         onClick: () => {
             this.isDrawerOpen = !this.isDrawerOpen
         }
     }

     

    
}