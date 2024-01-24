package com.example.EduViva.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "Companies")
public class Company {
    @Id
    private String id;
    private String companyname;
    private String email;
    private String short_description;
    private String description;
    private String phone;
    private String city;
    private String address;
    private boolean isBeginner;

    public String getCompanyImage() {
        return companyImage;
    }

    public void setCompanyImage(String companyImage) {
        this.companyImage = companyImage;
    }

    private String companyImage;


    public boolean isBeginner() {
        return isBeginner;
    }

    public void setBeginner(boolean beginner) {
        isBeginner = beginner;
    }


    @DBRef

    private List<GesService> services;
    public List<GesService> getServices() {
        return services;
    }

    @DBRef

    private List<Offer> offers;
    public List<Offer> getOffers() {
        return offers;
    }


    public void setServices(List<GesService> services) {
        this.services = services;
    }

    public String toString() {
        return "Company{" +
                "id='" + id + '\'' +
                ", companyname='" + companyname + '\'' +
                ", email='" + email + '\'' +
                ", short_description='" + short_description + '\'' +
                ", description='" + description + '\'' +
                ", phone='" + phone + '\'' +
                ", city='" + city + '\'' +
                ", address='" + address + '\'' +
                ", isBeginner='" + isBeginner + '\'' +
                ", companyImage='" + companyImage + '\'' +
                '}';
    }

    public Company() {
    }

    public Company(String id, String companyname, String email, String short_description, String description, String phone, String city, String address,boolean isBeginner,String companyImage) {
        this.id = id;
        this.companyname = companyname;
        this.email = email;
        this.short_description = short_description;
        this.description = description;
        this.phone = phone;
        this.city = city;
        this.address = address;
        this.isBeginner=isBeginner;
        this.companyImage=companyImage;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCompanyname() {
        return companyname;
    }

    public void setCompanyname(String companyname) {
        this.companyname = companyname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getShort_description() {
        return short_description;
    }

    public void setShort_description(String short_description) {
        this.short_description = short_description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

}
