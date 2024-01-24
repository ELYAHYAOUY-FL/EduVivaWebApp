package com.example.EduViva.Controller;

import com.example.EduViva.Entity.Company;
import com.example.EduViva.Entity.GesService;
import com.example.EduViva.Service.CompanyService;
import com.example.EduViva.Service.GesServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v2/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping(value = "/save")
    public String saveCompany(@RequestBody Company company) {
        companyService.saveOrUpdate(company);
        return company.getId();

    }

    @GetMapping(value = "/getAll")
    public Iterable<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    @PutMapping(value = "/update/{id}")
    private Company updateCompany(@RequestBody Company company, @PathVariable(name = "id") String id) {
        company.setId(id);
        companyService.saveOrUpdate(company);
        return company;
    }

    @DeleteMapping(value = "/delete/{id}")
    private void deleteCompany(@PathVariable("id") String id) {
        companyService.deleteCompany(id);
    }

    @RequestMapping(value = "/search/{id}")
    private Company getCompany(@PathVariable(name = "id") String companyId) {
        return companyService.getCompanyById(companyId);
    }
    @PostMapping(value = "/uploadImage/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void uploadImage(@PathVariable String companyId, @RequestParam("file") MultipartFile file) {
        companyService.uploadImage(companyId, file);
    }

   
    /*@PostMapping(value = "/save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String saveCompany(
            @RequestPart("company") Company company,
            @RequestPart("file") MultipartFile file
    ) {
        // Process the company and file
        companyService.saveOrUpdate(company);
        // Handle file upload if needed
        companyService.uploadImage(company.getId(), file);

        return company.getId();
    }
*/
}
