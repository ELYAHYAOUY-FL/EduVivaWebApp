import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FundraiserService {

  constructor() { }
  private currentCompany!: string;

  setCompany(company: string) {
    this.currentCompany = company;
  }

  getCompany() {
    return this.currentCompany;
  }
}
