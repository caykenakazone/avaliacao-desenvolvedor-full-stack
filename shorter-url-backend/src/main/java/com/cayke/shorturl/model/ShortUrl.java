package com.cayke.shorturl.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

/**
 * Classe que representa uma URL encurtada armazenada no MongoDB.
 */
@Document(collection = "short_urls")// Define a coleção no MongoDB
public class ShortUrl {
    @Id
    private String id; // O ID será usado como identificador da URL encurtada
    private String originalUrl;
    private String shortUrl; // Salvando a URL encurtada direto no banco, assim que o user manda a URL a ser encurtada
    private LocalDateTime createdAt;
    private long accessCount;

    /**
     * Construtor padrão que inicializa a data de criação e contador de acessos.
     */
    public ShortUrl() {
        this.createdAt = LocalDateTime.now();
        this.accessCount = 0;
    }
    /** Construtor principal para criar uma URL encurtada.
     * id Identificador único gerado.
     * originalUrl URL original fornecida pelo usuário.
     * */
    public ShortUrl(String id, String originalUrl) {
        this.id = id;
        this.originalUrl = originalUrl;
        this.shortUrl = "http://localhost:8080/url/" + id; // 🔗 Define a URL encurtada ao criar a entidade
        this.createdAt = LocalDateTime.now();
        this.accessCount = 0;
    }

    public String getId() {
        return id;
    }

    public String getOriginalUrl() {
        return originalUrl;
    }

    public String getShortUrl() {
        return shortUrl;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public long getAccessCount() {
        return accessCount;
    }

    public void incrementAccessCount() {
        this.accessCount++;
    }
}