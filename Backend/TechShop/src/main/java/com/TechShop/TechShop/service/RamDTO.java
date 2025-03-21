package com.TechShop.TechShop.service;

import java.util.List;

public class RamDTO {
    private String name;
    private String price;
    private byte[] photo;
    private List<String> specifications;

    public RamDTO(String name, String price,byte[] photo,List<String> specifications){
        this.name = name;
        this.price = price;
        this.photo = photo;
        this.specifications=specifications;
    }
    public RamDTO(String name, String price,List<String> specifications){
        this.name = name;
        this.price = price;
        this.specifications=specifications;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public List<String> getSpecifications() {
        return specifications;
    }

    public void setSpecifications(List<String> specifications) {
        this.specifications = specifications;
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
}
