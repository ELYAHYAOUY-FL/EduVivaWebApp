package com.example.EduViva.Service;

import com.example.EduViva.Entity.Company;
import com.example.EduViva.Entity.GesService;
import com.example.EduViva.Entity.Offer;
import com.example.EduViva.Repo.CompanyRepo;
import com.example.EduViva.Repo.OfferRepo;
import com.example.EduViva.Repo.ServicesRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OfferService {
    @Autowired
    private CompanyRepo companyRepo;

    private final OfferRepo offerRepo;


    @Autowired
    public OfferService(OfferRepo offerRepo) {
        this.offerRepo = offerRepo;
    }


    public void saveOfferWithAllCompanies(Offer offerreq) {
        List<Company> allCompanies = fetchAllCompanies();
        offerreq.setCompanies(allCompanies);
        offerRepo.save(offerreq);
    }
    private List<Company> fetchAllCompanies() {
        return companyRepo.findAll();
    }
    public void saveOrUpdate(Offer offer) {
        offerRepo.save(offer);

    }

    public Iterable<Offer> getAllOffers() {
        return offerRepo.findAll();
    }

    public void deleteOffer(String id) {
        offerRepo.deleteById(id);
    }

    public Offer getOfferById(String offerId) {
        return offerRepo.findById(offerId).orElse(null);
    }
}
