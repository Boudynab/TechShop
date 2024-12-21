package com.TechShop.TechShop.service;

import jakarta.persistence.*;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
public class Desktop {
    @Id
    @SequenceGenerator(
            name ="desktop_sequence",
            sequenceName = "desktop_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "desktop_sequence"
    )
    private Long id;

    private String name;
    private String price;

    @Lob
    private byte[] photo;


    public Desktop(){}

    public Desktop(String name,String price,byte[] photo){
        this.name =name;
        this.price=price;
        this.photo=photo;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
