package com.cayke.shorturl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ShortUrlApplication {
    //http://localhost:8080/swagger-ui/index.html endpoint swagger
    public static void main(String[] args) {
        SpringApplication.run(ShortUrlApplication.class, args);
    }

}
