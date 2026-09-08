package com.orlando.portfolio.controller;

import com.orlando.portfolio.model.ContactMessage;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private static final Logger log = LoggerFactory.getLogger(ContactController.class);

    /**
     * Receives contact-form submissions from the frontend.
     *
     * This currently logs the message server-side. To actually deliver it,
     * wire in an email provider here (e.g. Resend, like the client sites use) —
     * inject an EmailService and call it before returning.
     */
    @PostMapping
    public ResponseEntity<Map<String, String>> receiveMessage(@Valid @RequestBody ContactMessage message) {
        log.info("New contact message from {} <{}>: {}",
                message.getName(), message.getEmail(), message.getMessage());

        return ResponseEntity.ok(Map.of("status", "received"));
    }
}
