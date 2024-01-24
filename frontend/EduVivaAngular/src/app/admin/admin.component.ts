import { Component ,OnInit} from '@angular/core';
import { ServiceService } from './gestion-service/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  CompanyArray : any[] = [];
  filteredCompanies: any[] = [];
searchTerm: string = '';
constructor(private companyService: ServiceService) { }


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
}

  searchCompanies() {
    if (this.searchTerm) {
      this.companyService.searchCompanies(this.searchTerm).subscribe(
        (response: any[]) => {
          this.filteredCompanies = response;
        },
        (error) => {
          console.error('Error during company search:', error);
        }
      );
    } else {
      // Handle the case where searchTerm is empty
      // You might want to show a message or reset the filteredCompanies array
    }
  }
}
