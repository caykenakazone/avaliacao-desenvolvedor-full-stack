package com.cayke.shorturl.service;

import com.cayke.shorturl.model.AcessUrl;
import com.cayke.shorturl.repository.AcessRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class AcessUrlService {
    private final AcessRepository acessUrlRepository;

    public AcessUrlService(AcessRepository acessUrlRepository) {
        this.acessUrlRepository = acessUrlRepository;
    }

    // Registra um novo acesso
    public void registerAccess(String idShortUrl) {
        AcessUrl access = new AcessUrl(null, idShortUrl, LocalDateTime.now());
        acessUrlRepository.save(access);
    }

    // Conta acessos na última hora
    public long getAccessCountLastHour(String idShortUrl) {
        LocalDateTime oneHourAgo = LocalDateTime.now().minusHours(1);
        return acessUrlRepository.findAccessesAfter(idShortUrl, oneHourAgo).size();
    }

    // Conta acessos no último dia
    public long getAccessCountLastDay(String idShortUrl) {
        LocalDateTime oneDayAgo = LocalDateTime.now().minusDays(1);
        return acessUrlRepository.findAccessesAfter(idShortUrl, oneDayAgo).size();
    }

    // Conta acessos no último mês
    public long getAccessCountLastMonth(String idShortUrl) {
        LocalDateTime oneMonthAgo = LocalDateTime.now().minusMonths(1);
        return acessUrlRepository.findAccessesAfter(idShortUrl, oneMonthAgo).size();
    }
}
