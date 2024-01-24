// call-to-action.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/admin/gestion-service/service.service';


@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class CallToActionComponent implements OnInit {

  @Input() 
  companies: any[] = [];
  Offerrs: any[] = [];
  title: string;
  description: string;
  dateStart: string;
  dateFin: string;
  selecteCompanies: string[] | null = null;
  showCompaniesOptions: boolean = false;
  OfferArray : any[] = [];
  currentOfferID = "";
  constructor(private servicesService: ServiceService,private http: HttpClient) {}
  ngOnInit() {
    this.getCompanies();
    this.getOffers();
  }

  getCompanies() {
    this.servicesService.getCompanies().subscribe(
      (data: any) => {
        this.companies = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  getOffers()
  {
    
    this.http.get("http://localhost:8085/api/v3/offer/getAll")
  
    .subscribe((resultData: any)=>
    {
    
        console.log(resultData);
        this.OfferArray = resultData;
    });
  }
  createOffer() {
    let bodyData = {
      "title" : this.title,
      "description": this.description,
      "dateStart": this.dateStart,
      "dateFin": this.dateFin,
      "companies": this.selecteCompanies.map(id => ({ id: id })), // Map to a list of companies
      
    };
    this.http.post('http://localhost:8085/api/v3/offer/save', bodyData, { responseType: 'text' })
    .subscribe((resultData: any) => {
      console.log(resultData);
      alert('offer created successfully');
      this.getOffers();
      this.title = '';
      this.description = '';
      this.dateStart = '';
      this.dateFin = '';
    
      this.selecteCompanies = [];
   
      this.currentOfferID = '';
    });
}
setUpdate(data: any) {
  // Set properties for updating a company
  this.title = data.title;
  this.description = data.description;
  this.dateStart = data.dateStart;
  this.dateFin = data.dateFin;
  this.selecteCompanies = data.companies.map((company: any) => company.id);

  this.currentOfferID = data.id;
}
UpdateRecords() {
  let bodyData = {
    "title" : this.title,
    "description": this.description,
    "dateStart": this.dateStart,
    "dateFin": this.dateFin,
    "companies": this.selecteCompanies.map(id => ({ id: id })), // Map to a list of companies
   
  };

  this.http.put("http://localhost:8085/api/v3/offer/update" + "/" + this.currentOfferID, bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
    console.log(resultData);
    alert("Offer Updated Successfully");
    this.getOffers();
    this.title = '';
  this.description = '';
  this.dateStart = '';
  this.dateFin = '';
 
  this.selecteCompanies = [];

  this.currentOfferID = '';
  });
}





  save()
  {
    if(this.currentOfferID == '')
    {
        this.createOffer();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:8085/api/v3/offer/delete" + "/" + data.id, { responseType: 'text' })
    .subscribe((resultData: any) => {
      console.log(resultData);
      alert("Offer Deleted Successfully");
      this.getOffers();
      this.title = '';
  this.description = '';
  this.dateStart = '';
  this.dateFin = '';
 
  this.selecteCompanies = [];

  this.currentOfferID = '';
    });
  }
  getCompaniesNames(companies: any[]): string {
    return companies
      .filter(company => company !== null)  // Filter out null values
      .map(company => company.companyname)  // Access companyname property
      .join(', ');
  }
}

