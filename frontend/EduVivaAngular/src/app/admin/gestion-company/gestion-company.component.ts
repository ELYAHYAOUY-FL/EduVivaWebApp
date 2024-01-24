import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../gestion-service/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gestion-company',
  templateUrl: './gestion-company.component.html',
  styleUrls: ['./gestion-company.component.scss']
})
export class GestionCompanyComponent implements OnInit {
  @Input() 
  services: any[] = [];
  Companies: any[] = [];
  CompanyArray : any[] = [];
  companyName: string;
  companyEmail: string;
  companyImage: string | null = null;
  companyShort_Description: string;
  companyDescription: string;
  companyPhone: string;
  companyCity: string;
  companyAddress: string;
  selectedServices: string[] | null = null;
  
  selectedFile: File | null = null;

showServicesOptions: boolean = false;

searchTerm: string = '';
filteredCompanies: any[] = [];

  currentCompanyID = "";
  constructor(private servicesService: ServiceService,private http: HttpClient) {}
  ngOnInit() {
    this.getServices();
    this.getCompanies();
  }
  getServices() {
    this.servicesService.getServices().subscribe(
      (data: any) => {
        this.services = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  getCompanies()
  {
    
    this.http.get("http://localhost:8085/api/v2/company/getAll")
  
    .subscribe((resultData: any)=>
    {
    
        console.log(resultData);
        this.CompanyArray = resultData;
    });
  }
  getServicesNames(services: any[]): string {
    return services.map(service => service.name).join(', ');
}
convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
searchCompanies() {
  this.filteredCompanies = this.CompanyArray.filter((company: any) => {
    // Customize the search criteria as needed
    return company.companyName.toLowerCase().includes(this.searchTerm.toLowerCase());
  });
}
setUpdate(data: any) {
  // Set properties for updating a company
  this.companyName = data.companyname;
  if (typeof data.companyImage === 'string') {
    this.companyImage = data.companyImage;
  } else if (data.companyImage instanceof FileList) {
    // Convert FileList to base64 string
    this.convertFileToBase64(data.companyImage[0]).then((base64String: string) => {
      this.companyImage = base64String;
    });
  }
  this.companyEmail = data.email;
  this.companyShort_Description = data.short_description;
  this.companyDescription = data.description;
  this.companyPhone = data.phone;
  this.companyCity = data.city;
  this.companyAddress = data.address;
  this.selectedServices = data.services.map((service: any) => service.id);

  this.currentCompanyID = data.id;
}

UpdateRecords() {
  console.log('Updating company...');
  let bodyData: {
    companyname: string;
    email: string;
    companyImage?: string;
    short_description: string;
    description: string;
    phone: string;
    city: string;
    address: string;
    services: { id: string }[];
  } = {
    companyname: this.companyName,
    email: this.companyEmail,
    short_description: this.companyShort_Description,
    description: this.companyDescription,
    phone: this.companyPhone,
    city: this.companyCity,
    address: this.companyAddress,
    services: this.selectedServices.map((id) => ({ id: id })),
  };

  if (this.selectedFile) {
    console.log('Selected file:', this.selectedFile);
    this.convertFileToBase64(this.selectedFile).then(
      (base64String: string) => {
        console.log('Base64 string:', base64String);
        // Update the companyImage property
        bodyData.companyImage = base64String;

        // Continue with the HTTP post request
        this.putCompany(bodyData);
      }
    );
  } else {
    // No file selected, set a default value for companyImage
    bodyData.companyImage = null;

    // Continue with the HTTP post request
    this.putCompany(bodyData);
  }
}

putCompany(bodyData: any) {
  this.http.put('http://localhost:8085/api/v2/company/update/' + this.currentCompanyID, bodyData, { responseType: 'text' })
    .subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Company updated successfully');
        this.getCompanies();
        this.resetFormFields();
      },
      (error: any) => {
        console.error('Error updating company:', error);
        console.log('Full error details:', error.error); // Log the full error details
        alert('Error updating company. Check console for details.');
      }
    );
}
resetFormFields() {
  this.companyName = '';
  this.companyImage = null;
  this.companyEmail = '';
  this.companyShort_Description = '';
  this.companyDescription = '';
  this.companyPhone = '';
  this.companyCity = '';
  this.companyAddress = '';
  this.selectedServices = [];
  this.currentCompanyID = '';
}
  
save()
{
 
    
    {
     this.UpdateRecords();
    }      

}
setDelete(data: any) {
  this.http.delete("http://localhost:8085/api/v2/company/delete" + "/" + data.id, { responseType: 'text' })
  .subscribe((resultData: any) => {
    console.log(resultData);
    alert("Company Deleted Successfully");
    this.getCompanies();
    this.companyName = '';
    this.companyImage =null;
    this.companyEmail = '';
    this.companyShort_Description = '';
    this.companyDescription = '';
    this.companyPhone = '';
    this.companyCity = '';
    this.companyAddress = '';
    this.selectedServices = [];
 ;
    this.currentCompanyID = '';
  });
}
}
