package org.acme.model;

import javax.validation.constraints.NotBlank;

public class Fruit {

    @NotBlank(message="Title may not be blank")
    public String name;

    @NotBlank(message="Title may not be blank")
    public String description;

    public Fruit() {
    }

    public Fruit(String name, String description) {
        this.name = name;
        this.description = description;
    }
}