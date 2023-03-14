import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicService } from '../public.service';
import notify from 'devextreme/ui/notify';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    
    isLoading = false;

    constructor(private cookieService: CookieService, private publicService: PublicService, private router : Router) { }

    ngOnInit() { 
        localStorage.clear();
    }

    verifyLogin(e){
        e.preventDefault();
        this.isLoading = true;
        const username = e.target.elements[0].value;
        const password = e.target.elements[1].value;
        const dataToSend = {
            username,
            password
        }

        this.publicService.verifyLogin(dataToSend).subscribe(
            (data: string) => {
            console.log(data)
            // Si la autenticación es exitosa, redireccionamos a la página Home
            // Guardamos el token en el local storage para usarlo en los servicios
            localStorage.setItem('token', data);
            notify('Bienvenido', 'success', 3000)
            this.router.navigate(['/', 'home']);
            },
            (error: HttpErrorResponse) => {
                notify(error, 'error', 3000);
              }
        ).add(() => {
            //Finalizacion del servicio
            this.isLoading = false;
        });
    }
}

