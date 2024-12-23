package com.TechShop.TechShop.service.search;


import java.util.List;

public class FilterDTO {
    private String name;
    private String price;
    private List<String>specifications;

    public List<String> getSpecifications() {
        return specifications;
    }

    public void setSpecifications(List<String> specifications) {
        this.specifications = specifications;
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
