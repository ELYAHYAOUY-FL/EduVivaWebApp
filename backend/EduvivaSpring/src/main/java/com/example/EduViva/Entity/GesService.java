package com.example.EduViva.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "Services")
public class GesService {
    @DBRef
    private List<Company> companies;

    @Id
    private String id;

    private String servicename;

    @Override
    public String toString() {
        return "GesService{" +
                "id='" + id + '\'' +
                ",servicename='" + servicename + '\'' +
                '}';
    }

    public GesService(String id, String servicename) {
        this.id = id;
        this.servicename = servicename;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public GesService() {

    }

    public GesService(String servicename) {
        this.servicename = servicename;
    }



    public String getName() {
        return servicename;
    }

    public void setName(String servicename) {
        this.servicename = servicename;
    }
}
