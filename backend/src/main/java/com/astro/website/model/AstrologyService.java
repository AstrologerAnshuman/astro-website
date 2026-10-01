package com.astro.website.model;

import jakarta.persistence.*;

@Entity
@Table(name = "services")
public class AstrologyService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(length = 1000)
    private String description;

    // Groups services on the site, e.g. "Astrology & Numerology"
    private String category;

    private String icon;

    private Integer durationMinutes;

    // Price in Indian Rupees (INR)
    private Double price;

    public AstrologyService() {}

    public AstrologyService(String name, String description, String category, String icon, Integer durationMinutes, Double price) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.icon = icon;
        this.durationMinutes = durationMinutes;
        this.price = price;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }
    public Integer getDurationMinutes() { return durationMinutes; }
    public void setDurationMinutes(Integer durationMinutes) { this.durationMinutes = durationMinutes; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
}
