import { Component, Inject, Input, OnInit } from '@angular/core';
import { PresencasService } from '../../services/presencas.service';
import { ColaboradorInterface } from '../../interfaces/ColaboradorInterface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class PresencaComponent implements OnInit {

  colaboradoresInWorkshop: ColaboradorInterface[] = [];
  colaboradoresGeneral: ColaboradorInterface[] = [];

  props: any;

  columns = ["Id" , "Nome"];

  constructor( @Inject(MAT_DIALOG_DATA) public dados: any, private presencaService: PresencasService){}

  workshopId: number = this.dados.propWorkshopId;

  ngOnInit(): void {
    this.props = this.dados;
    this.colaboradoresList(this.dados.propWorkshopId);
  }
  
  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    
    this.colaboradoresInWorkshop = this.colaboradoresGeneral.filter(colaborador => {
      return colaborador.nome.toLowerCase().includes(value);
    })
  }
  
  colaboradoresList(workshopId: number){
    this.presencaService.GetAllColaboradoresInWorkshop(workshopId).subscribe(response => {
      const dados = response.dados;
      this.colaboradoresInWorkshop = dados;
      this.colaboradoresGeneral = dados;
    });
  }
  
}
