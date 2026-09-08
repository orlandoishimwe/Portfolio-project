package com.orlando.portfolio.model;

import java.util.List;

public class Project {
    private String name;
    private String client;
    private String sector;
    private String year;
    private String description;
    private List<String> stack;
    private boolean featured;

    public Project() {
    }

    public Project(String name, String client, String sector, String year,
                    String description, List<String> stack, boolean featured) {
        this.name = name;
        this.client = client;
        this.sector = sector;
        this.year = year;
        this.description = description;
        this.stack = stack;
        this.featured = featured;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getStack() {
        return stack;
    }

    public void setStack(List<String> stack) {
        this.stack = stack;
    }

    public boolean isFeatured() {
        return featured;
    }

    public void setFeatured(boolean featured) {
        this.featured = featured;
    }
}
