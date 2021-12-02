import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {
  documents: Array<Object> = [
    {
      type: 'Cédula de ciudadania'
    },
    {
      type: 'NIT'
    },
    {
      type: 'Registro civil'
    },
    {
      type: 'Tarjeta de identidad'
    },
    {
      type: 'Tarjeta de extranjeria'
    },
    {
      type: 'Pasaporte'
    },
  ]
  constructor() { }

  ngOnInit() { }

}
