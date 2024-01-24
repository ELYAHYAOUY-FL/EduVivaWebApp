import { Component,OnInit,Input } from '@angular/core';
import { ServiceService } from 'src/app/admin/gestion-service/service.service';
import { HttpClient } from '@angular/common/http';

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
interface Service {
  id: string;
  servicename:string | null;
  companies?:Company[];
  // Optional array of offer objects
}

@Component({
  selector: 'app-fundraiser-home',
  templateUrl: './fundraiser-home.component.html',
  styleUrls: ['./fundraiser-home.component.scss']
})
export class FundraiserHomeComponent implements OnInit {

  constructor(private servicesService: ServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((navItem, i) => {
      navItem.addEventListener("click", () => {
        navItems.forEach((item, j) => {
          item.classList.remove("active");
        });
        navItem.classList.add("active");
      });
    });

    this.getCompanies();
    this.getServices();
  }
  @Input() companyname: string;
  @Input() short_description: string;
  @Input() description: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() city: string;
  @Input() address: string | null = null;

  // Assuming companies have an image property
  @Input() companies: Company[] = [];
  @Input() services: Service[] = [];
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
  getServices() {
    this.servicesService.getServices().subscribe(
      (data: any) => {
        console.log('Services:', data);
        this.services = data;
        
        // Populate services for each company
        this.companies.forEach(company => {
          company.services = this.services.filter(service => company.serviceIds.includes(service.id));
        });
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  getServicesNames(services: any[]): string {
    return services.map(service => service.name).join(', ');
}
 

}
