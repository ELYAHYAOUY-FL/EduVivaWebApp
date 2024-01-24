import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/admin/gestion-service/service.service';

@Component({
  selector: 'app-show-companies',
  templateUrl: './show-companies.component.html',
  styleUrls: ['./show-companies.component.scss']
})
export class ShowCompaniesComponent implements OnInit {
  constructor(private servicesService: ServiceService, private http: HttpClient) {}

  CompanyArray: any[] = [];

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.http.get("http://localhost:8085/api/v2/company/getAll")
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.CompanyArray = resultData;
      });
  }

  setDelete(data: any) {
    this.http.delete(`http://localhost:8085/api/v2/company/delete/${data.id}`, { responseType: 'text' })
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Company Deleted Successfully");
        this.getCompanies();
      });
  }

  getServicesNames(services: any[]): string {
    return services.map(service => service.name).join(', ');
  }
}
