package com.orlando.portfolio.service;

import com.orlando.portfolio.model.Project;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Source of truth is /frontend/src/data/profile.ts — this mirrors it so the
 * same data can be served dynamically if the frontend is pointed at this API
 * (VITE_API_URL). Keep the two in sync when you edit your project list.
 */
@Service
public class ProjectService {

    private final List<Project> projects = List.of(
            new Project(
                    "MegaP House & Kiza Foundation",
                    "MegaP Book House Ltd",
                    "Bookstore / Nonprofit",
                    "2026",
                    "A dual-purpose platform: an e-commerce bookstore (MegaP House) with full checkout, " +
                            "paired with a fully separate nonprofit site for the Kiza Foundation.",
                    List.of("Vue 3", "Vite", "Node.js", "Express", "Neon Postgres", "Pesapal"),
                    true
            ),
            new Project(
                    "Kigali Clipper Zone",
                    "Kigali Clipper Zone",
                    "Barbershop",
                    "2026",
                    "A booking-first site for a Kigali barbershop, with a protected admin dashboard and " +
                            "automated confirmation emails.",
                    List.of("Vue 3", "Vite", "Neon Postgres", "Resend"),
                    true
            ),
            new Project(
                    "Dontez Restaurant",
                    "Dontez Restaurant",
                    "Restaurant",
                    "2025",
                    "A restaurant site built around motion: a scroll-driven pizza animation and a " +
                            "component-per-section architecture.",
                    List.of("Vue 3", "Vite", "GSAP"),
                    true
            )
    );

    public List<Project> findAll() {
        return projects;
    }
}
