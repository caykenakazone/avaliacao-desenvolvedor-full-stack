package com.cayke.shorturl.dto;

/**
 * DTO para representar a quantidade de acessos de uma URL encurtada.
 */
public class AcessUrlDTO {

    private Long lastHour;
    private Long lastDay;
    private Long lastMonth;

    public AcessUrlDTO() {
    }

    public Long getLastHour() {
        return lastHour;
    }

    public void setLastHour(Long lastHour) {
        this.lastHour = lastHour;
    }

    public Long getLastDay() {
        return lastDay;
    }

    public void setLastDay(Long lastDay) {
        this.lastDay = lastDay;
    }

    public Long getLastMonth() {
        return lastMonth;
    }

    public void setLastMonth(Long lastMonth) {
        this.lastMonth = lastMonth;
    }


    
}
