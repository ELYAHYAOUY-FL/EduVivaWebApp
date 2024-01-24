package com.example.EduViva.Repo;

import com.example.EduViva.Entity.Company;
import com.example.EduViva.Entity.Offer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OfferRepo extends MongoRepository<Offer,String> {
}
