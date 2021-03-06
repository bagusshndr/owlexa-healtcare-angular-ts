import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LayananService {
  // Http Headers
  httpOptions = {
    // headers: new HttpHeaders({
    //   'Content-Type': 'application/json'
    // })
  }

  // Base URL
  baseurl = `${environment.apiUrl}`

  constructor(private http: HttpClient) { }
  GET

  GetCorporate(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/Corporate_Health/Corporate_Health`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }
  GetThirdParty(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/third_party/third_party`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetSemiManagedCare(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/semi_managed_care/semi_managed_care`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetManagedCare(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/managed_care/managed_care`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetOptimalisasiBPJS(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/optimalisasi_bpjs/optimalisasi_bpjs`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetArtikel(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/article/article`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetFaq(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/faq/faq`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetEvent(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/event/event`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetPromo(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/promo/promo`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetKarir(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/karir/karir`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetSurvey(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/survey_online/survey_online`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetTechnology(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/technologi_service/technologi_service`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetKlienBerharga(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/klien_berharga/klien_berharga`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetBerita(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/news/news`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetKonsultasi(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/konsultasi/konsultasi`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  GetKontak(): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/Contact/Contact`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  getByIdPromo(id_promo): Observable<any> {
    var result = this.http.get<any>(this.baseurl + `/promo/promo` + id_promo)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

    return result;
  }

  // PostKonsultasi(): Observable<any> {
  //   var result = this.http.post<any>(this.baseurl + `/konsultasi/konsultasi`)
  //     .pipe(
  //       retry(1),
  //       catchError(this.errorHandl)
  //     )

  //   return result;
  // }

  // GetLintasarta(): Observable<any> {
  //   debugger
  //   var result = this.http.get<any>(this.baseurl + `/Lintasarta/Lintasarta`)
  //     .pipe(
  //       retry(1),
  //       catchError(this.errorHandl)
  //     )

  //   return result;
  // }

  // GetBisnisUnit(): Observable<any> {
  //   debugger
  //   var result = this.http.get<any>(this.baseurl + `/Business_Unit/Business_Unit`)
  //     .pipe(
  //       retry(1),
  //       catchError(this.errorHandl)
  //     )

  //   return result;
  // }

  // GET BY ID
  // GetArticle(id): Observable<Article> {
  //   return this.http.get<any>(this.baseurl + 'article/id?id=' + id)
  //   .pipe(
  //     retry(1),
  //     catchError(this.errorHandl)
  //   )
  // }


  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
