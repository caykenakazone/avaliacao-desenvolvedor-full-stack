package com.cayke.shorturl.controller;

import com.cayke.shorturl.dto.AcessUrlDTO;
import com.cayke.shorturl.model.AcessUrl;
import com.cayke.shorturl.model.ShortUrl;
import com.cayke.shorturl.service.AcessUrlService;
import com.cayke.shorturl.service.UrlService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * Controlador REST para lidar com os endpoints de encurtamento e redirecionamento de URLs.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/url")
public class UrlController {
    private final UrlService urlService;
    private final AcessUrlService acessService;
    public UrlController(UrlService urlService, AcessUrlService acessService) {
        this.urlService = urlService;
        this.acessService = acessService;
    }
    //Endpoint para listar todas as URLs encurtadas junto com seus identificadores.
    @GetMapping("/list")
    public ResponseEntity<List<ShortUrl>> getShortUrls() {
        List<ShortUrl> urls = urlService.getAllShortUrls();
        return ResponseEntity.ok(urls);
    }

    /**
     * Endpoint para encurtar uma URL.
     *
     * requestBody JSON contendo a URL original no formato { "originalUrl": "https://exemplo.com" }
     * ResponseEntity com a URL encurtada e identificador gerado.
     */
    @PostMapping("/shorten")
    public ResponseEntity<Map<String, String>> shortenUrl(@RequestBody Map<String, String> requestBody) {
        String originalUrl = requestBody.get("originalUrl");

        if (originalUrl == null || originalUrl.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "URL original é obrigatória"));
        }
        ShortUrl shortUrl = urlService.shortenUrl(originalUrl);
        String shortUrlString = "http://localhost:8080/url/" + shortUrl.getId(); // Gera a URL encurtada dinamicamente
        return ResponseEntity.ok(Map.of(
                "id", shortUrl.getId(),
                "originalUrl", shortUrl.getOriginalUrl(),
                "shortUrl", shortUrlString
        ));
    }

    /**
     * Vai pegar o id e redirecionar, a shortUrl já foi criada acima, aqui ele confere, se a página existir ele
     * redireciona e caso nao exista irá mostrar notFound
     */
    @GetMapping("/{id}")
    public ResponseEntity<Void> redirectToOriginalUrl(@PathVariable String id) {
        Optional<ShortUrl> optionalShortUrl = urlService.getOriginalUrl(id);

        if (optionalShortUrl.isPresent()) {
            ShortUrl shortUrl = optionalShortUrl.get();
            urlService.incrementAccessCount(shortUrl); // Atualiza a contagem geral
            acessService.registerAccess(id); // Registra o acesso no banco

            return ResponseEntity.status(HttpStatus.FOUND)
                    .location(URI.create(shortUrl.getOriginalUrl())) // Redireciona para a URL original
                    .build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String id) {
        urlService.deleteShort(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Long>> getShortUrlStats(@RequestParam String idShortUrl) {
        return ResponseEntity.ok(Map.of(
                "lastHour", acessService.getAccessCountLastHour(idShortUrl),
                "lastDay", acessService.getAccessCountLastDay(idShortUrl),
                "lastMonth", acessService.getAccessCountLastMonth(idShortUrl)
        ));
    }

}