package com.example.EduViva.Service;

import com.example.EduViva.Entity.Company;
import com.example.EduViva.Entity.GesService;
import com.example.EduViva.Repo.CompanyRepo;
import com.example.EduViva.Repo.ServicesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CompanyService {

    @Autowired
    private ServicesRepo serviceRepo;

    private final CompanyRepo repo;


    @Autowired
    public CompanyService(CompanyRepo repo) {
        this.repo = repo;
    }

    public void saveCompanyWithAllServices(Company companyreq) {
        List<GesService> allServices = fetchAllGesServices();
        companyreq.setServices(allServices);
        repo.save(companyreq);
    }

    private List<GesService> fetchAllGesServices() {
        return serviceRepo.findAll();
    }

    public Iterable<Company> getAllCompanies() {
        return repo.findAll();
    }

    public void saveOrUpdate(Company company) {


        repo.save(company);
    }

    public void deleteCompany(String id) {
        repo.deleteById(id);
    }

    public Company getCompanyById(String companyId) {
        return repo.findById(companyId).orElse(null);
    }
    public void uploadImage(String companyId, MultipartFile file) {
        // Implement image upload logic using GridFS
        // Set the imageId in the corresponding Company entity
    }

    public byte[] getImage(String companyId) {
        // Implement logic to retrieve image bytes from GridFS based on companyId
        return null;
    }
}
