import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: number;
  nome: string;
  telefone: string;
  endereco: string;

}
@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private url = 'http://localhost/apiAppCrud/apiCliente';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Cliente]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url+'?id=' + id);
  }
  
  create(cliente: Cliente){
    return this.http.post(this.url, cliente);
  }

  update(cliente: Cliente, id: any){
    return this.http.put(this.url+'?id=' + id, cliente);
  }
}
