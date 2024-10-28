import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../interfaces/ResponseInterface';
import { PresencaInterface } from '../interfaces/PresencaInterface';
import { ColaboradorInterface } from '../interfaces/ColaboradorInterface';

@Injectable({
  providedIn: 'root'
})
export class PresencasService {
  
  private apiUrl = `${environment.apiUrl}/Presenca`
  constructor( private http: HttpClient) { }

  GetAllPresencas() : Observable<ResponseInterface<PresencaInterface[]>>{
    return this.http.get<ResponseInterface<PresencaInterface[]>>(this.apiUrl);
  }
  GetOnePresenca(id: number) : Observable<ResponseInterface<PresencaInterface>>{
    return this.http.get<ResponseInterface<PresencaInterface>>(`${this.apiUrl}/${id}`);
  }
  PutPresenca(presenca : PresencaInterface) : Observable<ResponseInterface<PresencaInterface>>{
    return this.http.put<ResponseInterface<PresencaInterface>>(this.apiUrl, presenca );
  }
  DeletePresenca(id: number) : Observable<ResponseInterface<PresencaInterface>>{
    return this.http.delete<ResponseInterface<PresencaInterface>>(`${this.apiUrl}/${id}`);
  }
  AddColaborador(colaboradorId: number, presencaId: number) : Observable<ResponseInterface<ColaboradorInterface>>{
    return this.http.put<ResponseInterface<ColaboradorInterface>>(`${this.apiUrl}/${presencaId}/AddColaborador`, colaboradorId);
  }
  
  RemoveColaborador(colaboradorId: number, presencaId: number) : Observable<ResponseInterface<ColaboradorInterface>>{
    return this.http.put<ResponseInterface<ColaboradorInterface>>(`${this.apiUrl}/${presencaId}/RemoveColaborador`, colaboradorId);
  }
  GetAllColaboradoresInWorkshop(workshopId: number) : Observable<ResponseInterface<ColaboradorInterface[]>>{
    return this.http.get<ResponseInterface<ColaboradorInterface[]>>(`${this.apiUrl}/GetAllColaboradoresInWorkshop/${workshopId}`);
  }
}
