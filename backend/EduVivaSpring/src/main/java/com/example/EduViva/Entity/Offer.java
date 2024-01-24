package com.example.EduViva.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;
@Document(collection = "Offers")
public class Offer {
    @Id
    private String id;
    private String title;
    private String description;

    private LocalDateTime dateStart;
    private LocalDateTime dateFin;
    @DBRef
    private List<Company> companies;

    public Offer(String id, String title, String description, LocalDateTime dateStart, LocalDateTime dateFin, List<Company> companies) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dateStart = dateStart;
        this.dateFin = dateFin;
        this.companies = companies;
    }

    @Override
    public String toString() {
        return "offer{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", dateStart=" + dateStart +
                ", dateFin=" + dateFin +
                ", companies=" + companies +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDateStart() {
        return dateStart;
    }

    public void setDateStart(LocalDateTime dateStart) {
        this.dateStart = dateStart;
    }

    public LocalDateTime getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDateTime dateFin) {
        this.dateFin = dateFin;
    }

    public List<Company> getCompanies() {
        return companies;
    }

    public void setCompanies(List<Company> companies) {
        this.companies = companies;
    }
}
