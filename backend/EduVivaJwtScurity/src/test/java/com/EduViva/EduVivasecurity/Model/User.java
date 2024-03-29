package com.EduViva.EduVivasecurity.Model;

import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class User {

    @Id
    private  String id;

    private String name;

    private String address;
}
