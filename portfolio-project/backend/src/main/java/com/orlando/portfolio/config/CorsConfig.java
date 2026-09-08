package com.orlando.portfolio.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Allows the deployed frontend (e.g. a Vercel/Netlify/GitHub Pages URL) to
 * call this API from the browser. Set app.frontend-origin in
 * application.properties or the FRONTEND_ORIGIN env var to your real domain.
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Value("${app.frontend-origin:http://localhost:5173}")
    private String frontendOrigin;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(frontendOrigin)
                .allowedMethods("GET", "POST", "OPTIONS")
                .allowedHeaders("*");
    }
}
