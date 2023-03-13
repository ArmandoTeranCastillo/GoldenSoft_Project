import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicService } from '../public.service';
import notify from 'devextreme/ui/notify';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    
    isLoading = false;

    constructor(private publicService: PublicService, private router : Router) { }

    ngOnInit() { 
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
        this.publicService.verifyLogin(dataToSend).subscribe((data) => {
            // Si la autenticación es exitosa, redireccionamos a la página Home
            this.router.navigate(['/home']);
            // Guardamos el token en el local storage para usarlo en los servicios
            localStorage.setItem('token', data.token);
            },
            (error) => {
            // Si la autenticación falla, mostramos un mensaje de error al usuario
            notify({ message: error, width: 400 }, 'error', 3000);
            }
        ).add(() => {
            //Finalizacion del servicio
            this.isLoading = false;
        });
    }
}

