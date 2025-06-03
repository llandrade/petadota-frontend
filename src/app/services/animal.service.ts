import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Animal} from "../model/animal.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private apiUrl = 'http://localhost:8080/animais';

  constructor(private http: HttpClient) {
  }

  listar(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  salvar(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl, animal);
  }

  excluir(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  buscarPorId(id: number) {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  atualizar(id: number, animal: Animal) {
    return this.http.put<Animal>(`${this.apiUrl}/${id}`, animal);
  }
}
