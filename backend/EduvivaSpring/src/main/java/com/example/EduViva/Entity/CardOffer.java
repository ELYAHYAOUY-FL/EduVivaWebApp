package com.example.EduViva.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "CardOffer")
public class CardOffer {
    @Id
    private String id;
    @DBRef
    private List<Company> companies;
    @DBRef
    private  List<Company> companyImage;

    @DBRef
    private List<Company> companyname;
    @DBRef
    private List<Company> short_description;
    @DBRef
    private List<Offer> title;
    @DBRef
    private List<Offer> dateStart;
    @DBRef
    private List<Offer> dateFin;
    @DBRef
    private List<Offer> offers;
    public List<Offer> getOffers() {
        return offers;
    }

    public void setOffers(List<Offer> offers) {
        this.offers = offers;
    }


    public List<Company> getCompanies() {
        return companies;
    }

    public void setCompanies(List<Company> companies) {
        this.companies = companies;
    }

    public CardOffer(String id, List<Company> companyImage, List<Company> companyname, List<Company> short_description, List<Offer> title, List<Offer> dateStart, List<Offer> dateFin, List<Offer> offers,List<Company> companies) {
        this.id = id;
        this.companyImage = companyImage;
        this.companyname = companyname;
        this.short_description = short_description;
        this.title = title;
        this.dateStart = dateStart;
        this.dateFin = dateFin;
        this.offers = offers;
        this.companies = companies;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<Company> getCompanyImage() {
        return companyImage;
    }

    public void setCompanyImage(List<Company> companyImage) {
        this.companyImage = companyImage;
    }

    public List<Company> getCompanyname() {
        return companyname;
    }

    public void setCompanyname(List<Company> companyname) {
        this.companyname = companyname;
    }

    public List<Company> getShort_description() {
        return short_description;
    }

    public void setShort_description(List<Company> short_description) {
        this.short_description = short_description;
    }

    public List<Offer> getTitle() {
        return title;
    }

    public void setTitle(List<Offer> title) {
        this.title = title;
    }

    public List<Offer> getDateStart() {
        return dateStart;
    }

    public void setDateStart(List<Offer> dateStart) {
        this.dateStart = dateStart;
    }

    public List<Offer> getDateFin() {
        return dateFin;
    }

    public void setDateFin(List<Offer> dateFin) {
        this.dateFin = dateFin;
    }

    @Override
    public String toString() {
        return "CardOffer{" +
                "id='" + id + '\'' +
                ", companyImage=" + companyImage +
                ", companyname=" + companyname +
                ", short_description=" + short_description +
                ", title=" + title +
                ", dateStart=" + dateStart +
                ", dateFin=" + dateFin +
                ", offers=" + offers +
                ", companies=" + companies +
                '}';
    }
}
