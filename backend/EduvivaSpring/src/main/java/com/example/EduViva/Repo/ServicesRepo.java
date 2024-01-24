package com.example.EduViva.Repo;

import com.example.EduViva.Entity.GesService;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ServicesRepo extends MongoRepository<GesService,String> {
}

