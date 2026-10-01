package com.astro.website.controller;

import com.astro.website.model.AstrologyService;
import com.astro.website.repository.ServiceRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    private final ServiceRepository serviceRepository;

    public ServiceController(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @GetMapping
    public List<AstrologyService> getAllServices() {
        return serviceRepository.findAll();
    }
}
