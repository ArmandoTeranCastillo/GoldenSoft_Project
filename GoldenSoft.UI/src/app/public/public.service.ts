import { Injectable, ViewChild} from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import {map, tap, catchError} from 'rxjs/operators';
import { DxDataGridComponent } from "devextreme-angular";

@Injectable()

export class PublicService{
    private inventory;
    private clients;
    private calibers;
    private variety;
    private quality;
    private typeBox;

    private inventoryissues;
    private inventoryreasonissues;

    private purchaseorder;
    private purchasedetails;

    

    constructor(private http: HttpClient){}

    //Lista de los observadores
    //Observador para inventario
    getInventory(): Observable<any>{
        return this.http.get('/api/Inventory').pipe(
            catchError(this.handleError)
        )
    }

    fetchInventory(): Observable<any>{
        if(!this.inventory){
            return this.http.get('/api/Inventory').pipe(
                tap(response => this.inventory = response)
            )
        }else{
            return of(this.inventory)
        }
    }

    fetchClients(): Observable<any>{
        if(!this.clients){
            return this.http.get('/api/Client').pipe(
                tap(response => this.clients = response)
            )
        }else{
            return of(this.clients)
        }
    }

    fetchCalibers(): Observable<any>{
        if(!this.calibers){
            return this.http.get('/api/Caliber').pipe(
                tap(response => this.calibers = response)
            )
        }else{
            return of(this.calibers)
        }
    }

    fetchVariety(): Observable<any>{
        if(!this.variety){
            return this.http.get('/api/Variety').pipe(
                tap(response => this.variety = response)
            )
        }else{
            return of(this.variety)
        }
    }

    fetchQuality(): Observable<any>{
        if(!this.quality){
            return this.http.get('/api/Quality').pipe(
                tap(response => this.quality = response)
            )
        }else{
            return of(this.quality)
        }
    }

    fetchTypeBox(): Observable<any>{
        if(!this.typeBox){
            return this.http.get('/api/TypeBox').pipe(
                tap(response => this.typeBox = response)
            )
        }else{
            return of(this.typeBox)
        }
    }

    fetchInventoryIssues(): Observable<any>{
        if(!this.inventoryissues){
            return this.http.get('/api/InventoryIssues').pipe(
                tap(response => this.inventoryissues = response)
            )
        }else{
            return of(this.inventoryissues)
        }
    }

    fetchInventoryReasonIssues(): Observable<any>{
        if(!this.inventoryreasonissues){
            return this.http.get('/api/InventoryReasonIssues').pipe(
                tap(response => this.inventoryreasonissues = response)
            )
        }else{
            return of(this.inventoryreasonissues)
        }
    }

    fetchPurchaseOrder(): Observable<any>{
        if(!this.purchaseorder){
            return this.http.get('/api/PurchaseOrder').pipe(
                tap(response => this.purchaseorder = response)
            )
        }else{
            return of(this.purchaseorder)
        }
    }

    fetchPurchaseDetails(): Observable<any>{
        if(!this.purchasedetails){
            return this.http.get('/api/PurchaseDetails').pipe(
                tap(response => this.purchasedetails = response)
            )
        }else{
            return of(this.purchasedetails)
        }
    }

    getClients(): Observable<any>{
        return this.http.get('/api/Client').pipe(
            catchError(this.handleError)
        )
    }

    getCalibers(): Observable<any>{
        return this.http.get('/api/Caliber').pipe(
            catchError(this.handleError)
        )
    }

    getVariety(): Observable<any>{
        return this.http.get('/api/Variety').pipe(
            catchError(this.handleError)
        )
    }

    getQuality(): Observable<any>{
        return this.http.get('/api/Quality').pipe(
            catchError(this.handleError)
        )
    }

    getTypeBox(): Observable<any>{
        return this.http.get('/api/TypeBox').pipe(
            catchError(this.handleError)
        )
    }

    getPurchaseOrder(): Observable<any>{
        return this.http.get('/api/PurchaseOrder').pipe(
            catchError(this.handleError)
        )
    }

    getPurchaseDetails(): Observable<any>{
        return this.http.get('/api/PurchaseDetails').pipe(
            catchError(this.handleError)
        )
    }

    getInventoryIssues(): Observable<any>{
        return this.http.get('/api/InventoryIssues').pipe(
            catchError(this.handleError)
        )
    }

    getInventoryReasonIssues(): Observable<any>{
        return this.http.get('/api/InventoryReasonIssues').pipe(
            catchError(this.handleError)
        )
    }

    //POST
    createInventory(data: any):  Observable<any>{
        return this.http.post('/api/Inventory', data).pipe(
            catchError(this.handleError)
        )
    }

    createClients(data: any): Observable<any>{
        return this.http.post('/api/Client', data).pipe(
            catchError(this.handleError)
        )
    }

    createCaliber(data: any): Observable<any>{
        return this.http.post('/api/Caliber', data).pipe(
            catchError(this.handleError)
        )
    }

    createVariety(data: any): Observable<any>{
        return this.http.post('/api/Variety', data).pipe(
            catchError(this.handleError)
        )
    }

    createQuality(data: any): Observable<any>{
        return this.http.post('/api/Quality', data).pipe(
            catchError(this.handleError)
        )
    }

    createTypeBox(data: any): Observable<any>{
        return this.http.post('/api/TypeBox', data).pipe(
            catchError(this.handleError)
        )
    }

    createPurchaseOrder(data: any): Observable<any>{
        return this.http.post('/api/PurchaseOrder', data).pipe(
            catchError(this.handleError)
        )
    }

    createPurchaseDetails(data: any): Observable<any>{
        return this.http.post('/api/PurchaseDetails', data).pipe(
            catchError(this.handleError)
        )
    }

    createInventoryIssues(data: any): Observable<any>{
        return this.http.post('/api/InventoryIssues', data).pipe(
            catchError(this.handleError)
        )
    }

    createInventoryReasonIssues(data: any): Observable<any>{
        return this.http.post('/api/InventoryReasonIssues', data).pipe(
            catchError(this.handleError)
        )
    }

    //PUT
    updateInventory(data:any): Observable<any>{
        return this.http.put('/api/Inventory', data).pipe(
            catchError(this.handleError)
        )
    }

    //PUT
    updateClient(data:any): Observable<any>{
        return this.http.put('/api/Client', data).pipe(
            catchError(this.handleError)
        )
    }

    updateCaliber(data:any): Observable<any>{
        return this.http.put('/api/Caliber', data).pipe(
            catchError(this.handleError)
        )
    }

    updateVariety(data:any): Observable<any>{
        return this.http.put('/api/Variety', data).pipe(
            catchError(this.handleError)
        )
    }

    updateQuality(data:any): Observable<any>{
        return this.http.put('/api/Quality', data).pipe(
            catchError(this.handleError)
        )
    }

    updateTypeBox(data:any): Observable<any>{
        return this.http.put('/api/TypeBox', data).pipe(
            catchError(this.handleError)
        )
    }

    updatePurchaseOrder(data:any): Observable<any>{
        return this.http.put('/api/PurchaseOrder', data).pipe(
            catchError(this.handleError)
        )
    }

    updatePurchaseDetails(data:any): Observable<any>{
        return this.http.put('/api/PurchaseDetails', data).pipe(
            catchError(this.handleError)
        )
    }

    updateInventoryIssues(data:any): Observable<any>{
        return this.http.put('/api/InventoryIssues', data).pipe(
            catchError(this.handleError)
        )
    }

    updateInventoryReasonIssues(data:any): Observable<any>{
        return this.http.put('/api/InventoryReasonIssues', data).pipe(
            catchError(this.handleError)
        )
    }

    //DELETE
    deleteInventory(id: number): Observable<any>{
        return this.http.delete('/api/Inventory?id=' + id).pipe(
            catchError(this.handleError)
        )
    }

    deleteClient(id: number): Observable<any>{
        return this.http.delete('/api/Client?id=' + id).pipe(
            catchError(this.handleError)
        )
    }

    deleteCaliber(id: number): Observable<any>{
        return this.http.delete('/api/Caliber?id=' + id).pipe(
            catchError(this.handleError)
        )
    }

    deleteVariety(id: number): Observable<any>{
        return this.http.delete('/api/Variety?id=' + id).pipe(
            catchError(this.handleError)
        )
    }

    deleteQuality(id: number): Observable<any>{
        return this.http.delete('/api/Quality?id=' + id).pipe(
            catchError(this.handleError)
        )
    }

    deleteTypeBox(id: number): Observable<any>{
        return this.http.delete('/api/TypeBox?id=' + id).pipe(
            catchError(this.handleError)
        )
    }

    deletePurchaseOrder(id: number): Observable<any>{
        return this.http.delete('/api/PurchaseOrder?id=' + id).pipe(
            catchError(this.handleError)
        )
    }

    deletePurchaseDetails(id: number): Observable<any>{
        return this.http.delete('/api/PurchaseDetails?id=' + id).pipe(
            catchError(this.handleError)
        )
    }

    deleteInventoryIssues(id: number): Observable<any>{
        return this.http.delete('/api/InventoryIssues?id=' + id).pipe(
            catchError(this.handleError)
        )
    }

    deleteInventoryReasonIssues(id: number): Observable<any>{
        return this.http.delete('/api/InventoryReasonIssues?id=' + id).pipe(
            catchError(this.handleError)
        )
    }
 
    getBarcode(data: string): Observable<Blob>{
        return this.http.get('/api/Barcode?code=' + data, {responseType: 'blob'}).pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    printImage(data:any){
        this.http.post('/api/Printer', data).pipe(
            catchError(this.handleError)
        )
    }

    private handleError(error: Response){
        console.log(error);
        const msg = 'Error status code' + error.status + 'status' + error.statusText;
        return throwError(msg);
    }
}



