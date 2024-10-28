import { Component, OnInit } from '@angular/core';
import { ColaboradoresService } from '../../services/colaboradores.service';
import { ColaboradorInterface } from '../../interfaces/ColaboradorInterface';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  colaboradores: ColaboradorInterface[] = [];
  colaboradoresGeneral: ColaboradorInterface[] = [];

  columns = ["Id" , "Nome", "Buttons"];

  constructor( private colaboradoresService: ColaboradoresService){}
  
  ngOnInit(): void {
      this.colaboradoresService.GetAllColaboradores().subscribe(response => {
        this.colaboradores = response.dados;
        this.colaboradoresGeneral = response.dados;
        console.log(response.dados);
      })
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    console.log(value)

    this.colaboradores = this.colaboradoresGeneral.filter(colaborador => {
      return colaborador.nome.toLowerCase().includes(value);
    })
  }
  deleteProcess(id: number){
    this.colaboradoresService.DeleteColaboradores(id).subscribe(response => {
      console.log(response);
      this.colaboradoresService.GetAllColaboradores().subscribe(response => {
        this.colaboradores = response.dados;
        this.colaboradoresGeneral = response.dados;
        console.log(response.dados);
      })
    });
  }
  
}
