import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {map, tap, catchError} from 'rxjs/operators';

@Injectable()

export class PublicService{
    constructor(private http: HttpClient){}

    //Lista de los observadores
    //Observador para inventario
    getInventory(): Observable<any>{
        return this.http.get('/api/Inventory').pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getClients(): Observable<any>{
        return this.http.get('/api/Client').pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getCalibers(): Observable<any>{
        return this.http.get('/api/Caliber').pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getVariety(): Observable<any>{
        return this.http.get('/api/Variety').pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getQuality(): Observable<any>{
        return this.http.get('/api/Quality').pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getTypeBox(): Observable<any>{
        return this.http.get('/api/TypeBox').pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getPurchaseOrder(): Observable<any>{
        return this.http.get('/api/PurchaseOrder').pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getPurchaseDetails(): Observable<any>{
        return this.http.get('/api/PurchaseDetails').pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getInventoryIssues(): Observable<any>{
        return this.http.get('/api/InventoryIssues').pipe(
            tap(console.log),
            catchError(this.handleError)
        )
    }

    getInventoryReasonIssues(): Observable<any>{
        return this.http.get('/api/InventoryReasonIssues').pipe(
            tap(console.log),
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
 
    private handleError(error: Response){
        console.log(error);
        const msg = 'Error status code' + error.status + 'status' + error.statusText;
        return throwError(msg);
    }
}



