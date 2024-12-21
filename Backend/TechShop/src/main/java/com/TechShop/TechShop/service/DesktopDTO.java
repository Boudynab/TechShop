package com.TechShop.TechShop.service;

public class DesktopDTO {
    private String name;
    private String price;
    private byte[] photo;

    public DesktopDTO(String name, String price,  byte[] photo) {
        this.name = name;
        this.price = price;
        this.photo = photo;
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
}
