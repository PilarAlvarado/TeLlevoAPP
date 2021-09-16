import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email:any;
  dato:string;

  get usuario() {
    return this.formularioRecuperar.get('usuario');
  }
  get contrasena() {
    return this.formularioRecuperar.get('contrasena');
  }

  public mensajeError = {
    usuario: [
      { type: 'required', message: 'Usuario es requerido' },
    ],
    contrasena: [
      { type: 'required', message: 'Contraseña es requerido' },
    ]
  };

  formularioRecuperar = this.formBuilder.group({
    usuario: [
      '',
      [
        Validators.required
      ]
    ],
    contrasena: [
      '',
      [
        Validators.required
      ]
    ]
  });


  constructor(private formBuilder: FormBuilder, private activeRouter : ActivatedRoute, private router : Router) {
    this.activeRouter.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.email = this.router.getCurrentNavigation().extras.state.email;
      }
    });
  }

  public toRecover() {
    this.router.navigate(['/home']);
  }

  public submit() {
    let navigationExtras: NavigationExtras={
      state:{dato: this.dato}
    };
    this.router.navigate(['/inicio'],navigationExtras);
  }

}



