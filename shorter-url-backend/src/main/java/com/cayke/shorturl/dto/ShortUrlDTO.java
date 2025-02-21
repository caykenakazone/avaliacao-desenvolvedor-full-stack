package com.cayke.shorturl.dto;

import java.time.LocalDateTime;

/**
 * DTO para representar URLs encurtadas na resposta da API.
 */
public class ShortUrlDTO {
    private String id;
    private String originalUrl;
    private String shortUrl;
    private LocalDateTime createdAt;
    private long accessCount;

    public ShortUrlDTO(String id, String originalUrl, String shortUrl, LocalDateTime createdAt, long accessCount) {
        this.id = id;
        this.originalUrl = originalUrl;
        this.shortUrl = shortUrl;
        this.createdAt = createdAt;
        this.accessCount = accessCount;
    }

    // Getters e Setters
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
}
