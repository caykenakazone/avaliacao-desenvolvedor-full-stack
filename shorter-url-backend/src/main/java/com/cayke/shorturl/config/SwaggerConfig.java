package com.cayke.shorturl.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Encurtador de URLs")
                        .version("1.0")
                        .description("API para encurtamento de URLs com redirecionamento automático.")
                        .contact(new Contact()
                                .name("Carlos")));
    }
}

