import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  datos:any = [];
  divisa!: number;
  moneda!: number;
  
  constructor(private dataService:DataService, private _formBuilder: FormBuilder){
    this.dataService.getDivisas().subscribe(data=>{this.datos = data});
  }

  enviar(){
    console.log(this.divisa)
    console.log(this.moneda)
  }
}
