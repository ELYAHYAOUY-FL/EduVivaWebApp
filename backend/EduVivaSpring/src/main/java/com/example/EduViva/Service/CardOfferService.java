package com.example.EduViva.Service;

import com.example.EduViva.Entity.CardOffer;
import com.example.EduViva.Entity.Company;
import com.example.EduViva.Entity.GesService;
import com.example.EduViva.Entity.Offer;
import com.example.EduViva.Repo.CardOfferRepo;
import com.example.EduViva.Repo.CompanyRepo;
import com.example.EduViva.Repo.OfferRepo;
import com.example.EduViva.Repo.ServicesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class CardOfferService {
    private CompanyRepo companyRepo;
    private OfferRepo offerRepo;
    private final CardOfferRepo repo;
    @Autowired
    public CardOfferService(CardOfferRepo repo) {
        this.repo = repo;
    }

    public void saveCardwithOffer(CardOffer offerreq) {
        List<Offer> allOffers = fetchAllOffers();
        offerreq.setOffers(allOffers);
        repo.save(offerreq);
    }
    public void saveCardwithTitle(CardOffer titlereq) {
        List<Offer> allTitles = fetchAllTitles();
        titlereq.setTitle(allTitles);
        repo.save(titlereq);
    }
    public void saveCardwithCompanies(CardOffer comapanyreq) {
        List<Company> allCompanies = fetchAllComapies();
        comapanyreq.setCompanies(allCompanies);
        repo.save(comapanyreq);
    }
    public void saveCardwithCompany(CardOffer imgreq) {
        List<Company> allimgs = fetchAllImages();
        imgreq.setCompanyImage(allimgs);
        repo.save(imgreq);
    }
    public void saveCardwithCompanyName(CardOffer namereq) {
        List<Company> allnames = fetchAllNames();
        namereq.setCompanyname(allnames);
        repo.save(namereq);
    }
    public void saveCardwithShortDescription(CardOffer descreq) {
        List<Company> alldesc = fetchAlldescriptions();
        descreq.setShort_description(alldesc);
        repo.save(descreq);
    }
    public void saveCardwithStartDate(CardOffer strdatereq) {
        List<Offer> allstartdate = fetchAllStartDate();
        strdatereq.setDateStart(allstartdate);
        repo.save(strdatereq);
    }
    public void saveCardwithFintDate(CardOffer findatereq) {
        List<Offer> allfintdate = fetchAllFintDate();
        findatereq.setDateFin(allfintdate);
        repo.save(findatereq);
    }
    private List<Company> fetchAllComapies() {
        return companyRepo.findAll();
    }
    private List<Offer> fetchAllOffers() {
        return offerRepo.findAll();
    }
    private List<Offer> fetchAllTitles() {
        return offerRepo.findAll();
    }

    private List<Company> fetchAllImages() {
        return companyRepo.findAll();
    }
    private List<Company> fetchAllNames() {
        return companyRepo.findAll();
    }
    private List<Company> fetchAlldescriptions() {
        return companyRepo.findAll();
    }
    private List<Offer> fetchAllStartDate() {
        return offerRepo.findAll();
    }
    private List<Offer> fetchAllFintDate() {
        return offerRepo.findAll();
    }
    public void saveOrUpdate(CardOffer card) {
        repo.save(card);
    }

    public Iterable<CardOffer> getAllCards() {
        return repo.findAll();
    }

    public void deleteCard(String id) {
        repo.deleteById(id);
    }

    public CardOffer getCardById(String cardId) {
        return repo.findById(cardId).orElse(null);
    }

    public void uploadImage(String companyId, MultipartFile file) {
    }
}
