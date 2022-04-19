import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Library } from '../interfaces/library.interface';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private readonly URI = "http://localhost:3000/api/libraries";
  constructor(private http: HttpClient) { }

  getLibraries(): Observable<Library[]>{
    return this.http.get<Library[]>(this.URI)
  }

  postLibrary(library:Library){
    return this.http.post<Library>(this.URI, library)
  }

  putLibrary(library:Library, id:number){
    return this.http.put<Library>(`${this.URI}/${id}`, library);
  }

  deleteLibrary(id:number){
    return this.http.delete<Library>(`${this.URI}/${id}`);
  }
}
