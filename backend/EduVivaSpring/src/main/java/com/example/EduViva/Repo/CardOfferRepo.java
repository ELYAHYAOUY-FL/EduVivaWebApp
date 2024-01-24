package com.example.EduViva.Repo;

import com.example.EduViva.Entity.CardOffer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CardOfferRepo extends MongoRepository<CardOffer,String> {
}
