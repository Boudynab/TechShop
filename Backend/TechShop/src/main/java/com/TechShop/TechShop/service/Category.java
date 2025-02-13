package com.TechShop.TechShop.service;


import jakarta.persistence.*;

import java.util.List;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
public class Category {
    @Id
    @SequenceGenerator(
            name ="category_sequence",
            sequenceName = "category_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "category_sequence"
    )
    private Long id;

    private String name;
    private String price;

    @Lob
    private byte[] photo;
    private List<String>specifications;


    public Category(){}

    public Category(String name,String price,byte[] photo,List<String>specifications){
        this.name =name;
        this.price=price;
        this.photo=photo;
        this.specifications=specifications;
    }

    public List<String> getSpecifications() {
        return specifications;
    }

    public void setSpecifications(List<String> specifications) {
        this.specifications = specifications;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }
}
