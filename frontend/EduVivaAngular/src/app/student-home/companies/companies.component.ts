import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/admin/gestion-service/service.service';

interface Company {
  companyname: string;
  short_description: string;
  description :string | null;
  companyImage: string | null;
  email: string | null;
  phone:string | null;
  city :string | null;
  address :string | null;
  serviceIds: string[];
  services?: Service[]; 

  // Optional array of offer objects
}
interface Offer {
  id: string;
  title: string;
  dateStart: string;
  dateFin: string;
  companies?:Company[];
  description: string;
}

interface Service {
  id: string;
  servicename:string | null;
  companies?:Company[];
  // Optional array of offer objects
}
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  constructor(private servicesService: ServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getCompanies();
    
  }

  @Input() title: string;
  @Input() short_description: string;
  @Input() dateStart: string;

  @Input() dateFin: string;
  @Input() companyname: string;
  @Input() companyImage: string | null = null;
  showCompanyDetails: boolean = false; // Added property for toggling details visibility
  selectedCompany: any; // Add

  // Assuming companies have an image property
  @Input() companies: Company[] = [];
  public offers: Offer[] = [];

  getOfferById(offerId: string): Offer | undefined {
    return this.offers.find(offer => offer.id === offerId);
  }
  getCompanies() {
    this.servicesService.getCompanies().subscribe(
      (data: any) => {
        console.log('Companies:', data);
        this.companies = data;
        
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  showDetails(company: any) {
    this.selectedCompany = company;
    this.showCompanyDetails = true;
  }
  // Assuming the type of the 'company' object is 'Company' (replace 'Company' with your actual type)
findCompanyInOffer(offer: any): any {
  return offer.companies.find((company: Company) => company.companyname === this.selectedCompany.companyname);
}

  getServicesNames(services: any[]): string {
    return services.map(service => service.name).join(', ');
}
 

  

}
