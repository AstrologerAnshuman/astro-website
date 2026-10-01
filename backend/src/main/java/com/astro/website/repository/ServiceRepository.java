package com.astro.website.repository;

import com.astro.website.model.AstrologyService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<AstrologyService, Long> {
}
