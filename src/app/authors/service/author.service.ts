import {Observable} from "rxjs";
import {Author} from "../../books/model/book";
import {HttpClient} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private http: HttpClient = inject(HttpClient);

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(Url + 'author/' + id);
  }

}
