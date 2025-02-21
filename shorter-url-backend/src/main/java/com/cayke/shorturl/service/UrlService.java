package com.cayke.shorturl.service;

import com.cayke.shorturl.model.ShortUrl;
import com.cayke.shorturl.repository.ShortUrlRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

/**
 * Serviço responsável pelo encurtamento e gerenciamento de URLs.
 */
@Service
public class UrlService {
    /**
     * Chama o repository
     * */
    private final ShortUrlRepository repository;
    /**
     * Aqui é definido os Alfanúmericos e o tamanho que deve ser o ID
     * */
    private static final String ALPHANUMERIC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int ID_LENGTH = 8;

    public UrlService(ShortUrlRepository repository) {
        this.repository = repository;
    }

    /**
     * Encurta uma URL gerando um identificador único e armazenando no MongoDB.
     * originalUrl é a URL original fornecida pelo usuário.
     * Objeto `ShortUrl` contendo o identificador e a URL encurtada.
     */
    public ShortUrl shortenUrl(String originalUrl) {
        String id = generateShortId();
        /**
         No shortUrl é onde será passado, id e a originalUrl, que logo após serão salvos no BD
        */
        ShortUrl shortUrl = new ShortUrl(id, originalUrl);
        /*Save no bd*/
        return repository.save(shortUrl);
    }
    /**
     * Lista todas as URLs encurtadas junto com seus identificadores. Que são mostrados na table
     * */
    public List<ShortUrl> getAllShortUrls() {return repository.findAll();}

    /**
     * Busca uma URL encurtada pelo identificador e retorna a URL original.
     *
     *  É passado o  id da URL encurtada.
     * Retorna Um `Optional<ShortUrl>` contendo a URL original se encontrada.
     */
    public Optional<ShortUrl> getOriginalUrl(String id) {
        return repository.findById(id);
    }
    /**
     * Método que faz o delete de alguma uma shortUrl caso necessário
     * É passado o id da URL encurtada
     * e caso exista, faz o delete
     * */
    public void deleteShort(String id) {
        repository.deleteById(id);
    }

    /**
     * Método para incrementar o contador de acessos ao link encurtado.
     * O shortUrl é o Objeto `ShortUrl` a ser atualizado, incrementando ao número de cliques.
     */
    public void incrementAccessCount(ShortUrl shortUrl) {
        shortUrl.incrementAccessCount();
        repository.save(shortUrl);
    }

    /**
     * Gera um identificador alfanumérico aleatório de 8 caracteres.
     *  Um ID único e não sequencial que será usado no própio endpoint.
     *  http://.../{id}
     */
    private String generateShortId() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder(ID_LENGTH);
        for (int i = 0; i < ID_LENGTH; i++) {
            int index = random.nextInt(ALPHANUMERIC.length());
            sb.append(ALPHANUMERIC.charAt(index));
        }
        return sb.toString();
    }
}
