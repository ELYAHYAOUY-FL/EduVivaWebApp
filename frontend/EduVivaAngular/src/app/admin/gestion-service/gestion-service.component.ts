import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.scss']
})
export class GestionServiceComponent implements OnInit {

  ServicetArray : any[] = [];
 
  servicename: string ="";

  currentServiceID = "";
  
  constructor(private http: HttpClient )
  {
    this.getAllService();
 
  }
  
  ngOnInit() {}
  register()
  {
  
    let bodyData = {
     
      "name" : this.servicename,
      
      
    };
 
    this.http.post("http://localhost:8085/api/v1/service/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Service added Successfully");
        this.getAllService();
 
        this.servicename = '';
        
    });
  }
  getAllService()
  {
    
    this.http.get("http://localhost:8085/api/v1/service/getAll")
  
    .subscribe((resultData: any)=>
    {
    
        console.log(resultData);
        this.ServicetArray = resultData;
    });
  }
  setUpdate(data: any)
  {
   this.servicename = data.name;
  
   this.currentServiceID = data.id;
   
  }
  UpdateRecords() {
    let bodyData = {
      "name": this.servicename,
    };
  
    this.http.put("http://localhost:8085/api/v1/service/update" + "/" + this.currentServiceID, bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Service Updated Successfully");
      this.getAllService();
      this.servicename = '';
      this.currentServiceID = ''; 
    });
  }
  
 
  save()
  {
    if(this.currentServiceID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
  setDelete(data: any) {
    this.http.delete("http://localhost:8085/api/v1/service/delete" + "/" + data.id, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Service Deleted Successfully");
      this.getAllService();
      this.servicename = '';
    });
  }
  
}