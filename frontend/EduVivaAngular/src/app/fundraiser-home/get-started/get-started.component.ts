import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/admin/gestion-service/service.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
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
manualServices: string[] = [];
  manualInput: string = '';

  showManualInput: boolean = false; 
  currentCompanyID = "";
  constructor(private servicesService: ServiceService,private http: HttpClient) {}
  ngOnInit() {
    this.getServices();
    this.getCompanies();
    console.log('Services:', this.services);
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
  addManualService() {
    if (this.manualInput.trim() !== '') {
      this.manualServices.push(this.manualInput.trim());
      this.manualInput = '';
    }
  }

  createCompany() {
    console.log('Creating company...');
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
          this.postCompany(bodyData);
        }
      );
    } else {
      // No file selected, set a default value for companyImage
      bodyData.companyImage = null;
    
      // Continue with the HTTP post request
      this.postCompany(bodyData);
    }
  }
 
 postCompany(bodyData: any) {
  this.http.post('http://localhost:8085/api/v2/company/save', bodyData, { responseType: 'text' })
    .subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Company created successfully');
        this.getCompanies();
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
      },
      (error: any) => {
        console.error('Error creating company:', error);
        console.log('Full error details:', error.error); // Log the full error details
        alert('Error creating company. Check console for details.');
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
  onFileSelected(event: any): void {
    const files: FileList = event.target.files;

    if (files && files.length > 0) {
      this.selectedFile = files[0];
      // Optionally, you can display the selected file name or other details
      console.log('Selected File:', this.selectedFile.name);
    }
  }
  
  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
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
    if(this.currentCompanyID == '')
    {
        this.createCompany();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
  getServicesNames(services: any[]): string {
    return services.map(service => service.name).join(', ');
}
// Inside your component class
// Inside your component class




}
