import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColaboradorInterface } from '../interfaces/ColaboradorInterface';
import { ResponseInterface } from '../interfaces/ResponseInterface';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private apiUrl = `${environment.apiUrl}/Colaborador`
  constructor( private http: HttpClient) { }

  GetAllColaboradores() : Observable<ResponseInterface<ColaboradorInterface[]>>{
    return this.http.get<ResponseInterface<ColaboradorInterface[]>>(this.apiUrl);
  }
  GetOneColaborador(id: number) : Observable<ResponseInterface<ColaboradorInterface>>{
    return this.http.get<ResponseInterface<ColaboradorInterface>>(`${this.apiUrl}/${id}`);
  }
  PostColaboradores(colaborador : ColaboradorInterface) : Observable<ResponseInterface<ColaboradorInterface>>{
    return this.http.post<ResponseInterface<ColaboradorInterface>>(this.apiUrl, colaborador);
  }
  PutColaboradores(colaborador : ColaboradorInterface) : Observable<ResponseInterface<ColaboradorInterface>>{
    return this.http.put<ResponseInterface<ColaboradorInterface>>(this.apiUrl, colaborador );
  }
  DeleteColaboradores(id: number) : Observable<ResponseInterface<ColaboradorInterface>>{
    return this.http.delete<ResponseInterface<ColaboradorInterface>>(`${this.apiUrl}/${id}`);
  }
}
