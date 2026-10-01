package com.astro.website.model;

import jakarta.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String clientName;

    private Integer rating; // 1-5

    @Column(length = 1000)
    private String comment;

    private String serviceTaken;

    public Review() {}

    public Review(String clientName, Integer rating, String comment, String serviceTaken) {
        this.clientName = clientName;
        this.rating = rating;
        this.comment = comment;
        this.serviceTaken = serviceTaken;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }
    public Integer getRating() { return rating; }
    public void setRating(Integer rating) { this.rating = rating; }
    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }
    public String getServiceTaken() { return serviceTaken; }
    public void setServiceTaken(String serviceTaken) { this.serviceTaken = serviceTaken; }
}
