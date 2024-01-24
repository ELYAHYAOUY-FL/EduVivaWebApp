import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/admin/gestion-service/service.service';

// Company model
interface Company {
  id:string;
  companyname: string;
  short_description: string;

  companyImage: string | null;
  offerIds: string[]; // Array of offer IDs
  offers?: Offer[]; // Optional array of offer objects
}

// Offer model
interface Offer {
  id: string;
  title: string;
  dateStart: string;
  dateFin: string;
  companies?:Company[];
  description: string;
}
@Component({
  selector: 'app-offerstudent',
  templateUrl: './offerstudent.component.html',
  styleUrls: ['./offerstudent.component.scss']
})
export class OfferstudentComponent implements OnInit {
  constructor(private servicesService: ServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getCompanies();
    this.getOffers();
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
  getOffers() {
    this.servicesService.getOffers().subscribe(
      (data: any) => {
        console.log('Offers:', data);
        this.offers = data; // Assuming data is an array of Offer objects

        // Populate offers for each company
        this.companies.forEach(company => {
          company.offers = this.offers.filter(offer => company.offerIds.includes(offer.id));
        });
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  

}