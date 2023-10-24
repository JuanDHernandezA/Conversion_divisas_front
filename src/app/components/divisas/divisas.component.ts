import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {

  datos:any = [];
  
  constructor(private dataService:DataService){
    this.dataService.getDivisas().subscribe(data=>{this.datos = data});
  }

  displayedColumns: string[] = ['Nombre', 'Abreviacion', 'Valor(USD)'];
}
