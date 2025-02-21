package com.cayke.shorturl.repository;

import com.cayke.shorturl.model.AcessUrl;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AcessRepository extends MongoRepository<AcessUrl, String> {

    // Busca acessos de um ID específico dentro de um período de tempo
    @Query("{ 'idShortUrl': ?0, 'localDate': { $gte: ?1 } }")
    List<AcessUrl> findAccessesAfter(String idShortUrl, LocalDateTime timestamp);

}
