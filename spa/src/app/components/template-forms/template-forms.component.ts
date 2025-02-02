import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
register: IRegisterForm ={
  name:"",
  email:"",
  password:"",
  repeatPass:""
};
constructor(){}
submit(){
  // Llegados a este punto, ya hemos podido validar todo excepto las contraseñas y ya recibimos los datos
console.log('Datos de inicio de sesión');
console.log(this.register.name);
console.log(this.register.email);
console.log(this.register.password);
console.log(this.register.repeatPass);

// Controlar si el password y el password verificado son iguales
if (this.register.password != this.register.repeatPass) {
    console.log('HAY QUE INTRODUCIR LAS DOS CONTRASEÑAS IGUALES PARA VALIDARLO')
    console.log('Hay que introducir las dos contraseñas iguales para validarlo')
    // Echar un mensaje de alerta
    return;
}

// Con estos datos ya todo OK, los enviamos al servidor para comprobar si el login es OK o NO
}
}
interface IRegisterForm{
  name: string;
  email: string;
  password: string;
  repeatPass: string;
}
