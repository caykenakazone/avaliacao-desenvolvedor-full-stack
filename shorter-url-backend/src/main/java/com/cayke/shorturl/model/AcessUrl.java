package com.cayke.shorturl.model;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;


@Getter
@Document(collection = "acess_url")// Define a coleção no MongoDB
public class AcessUrl {

    @Id
    private String id;
    private String idShortUrl;
    private LocalDateTime localDate;

    public AcessUrl(String id, String idShortUrl, LocalDateTime localDate) {
        this.id = id;
        this.idShortUrl = idShortUrl;
        this.localDate = localDate;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setIdShortUrl(String idShortUrl) {
        this.idShortUrl = idShortUrl;
    }

    public void setLocalDate(LocalDateTime localDate) {
        this.localDate = localDate;
    }
}
