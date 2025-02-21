package com.cayke.shorturl.repository;

import com.cayke.shorturl.model.ShortUrl;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Repositório para acessar e manipular URLs encurtadas no MongoDB.
 */
@Repository
public interface ShortUrlRepository extends MongoRepository<ShortUrl, String> {

}
