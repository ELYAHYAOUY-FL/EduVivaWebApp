package com.example.EduViva.Service;

import com.example.EduViva.Entity.GesService;
import com.example.EduViva.Repo.ServicesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GesServiceService {

    @Autowired
    private ServicesRepo repo;
    public void saveorUpdate(GesService services) {
       repo.save(services) ;
    }

    public Iterable<GesService> listAll() {
        return this.repo.findAll();
    }

    public void deleteService(String id) {
        repo.deleteById(id);
    }

    public GesService getServiceByID(String serviceid) {
        return repo.findById(serviceid).get();

    }
}
