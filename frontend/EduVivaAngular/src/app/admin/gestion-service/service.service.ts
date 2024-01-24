import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private servicesApiUrl = 'http://localhost:8085/api/v1/service'; // Update the URL based on your API for services
  private companiesApiUrl = 'http://localhost:8085/api/v2/company'; // Update the URL based on your API for companies
  private offersApiUrl = 'http://localhost:8085/api/v3/offer';
  private apiUrl = 'http://localhost:8085/api/v2/company';
  // Update the URL based on your API for offers
  constructor(private http: HttpClient) {}

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(this.servicesApiUrl + '/getAll');
  }
  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.companiesApiUrl}/getAll`);
  }
  getOffers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.offersApiUrl}/getAll`);
  
  }
  searchCompanies(searchTerm: string): Observable<any[]> {
    const url = `${this.apiUrl}/search?searchTerm=${searchTerm}`;
    return this.http.get<any[]>(url);
  }
}
