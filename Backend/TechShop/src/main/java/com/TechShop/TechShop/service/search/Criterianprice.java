package com.TechShop.TechShop.service.search;

import com.TechShop.TechShop.service.Category;
import com.TechShop.TechShop.service.CategoryDTO;
import com.TechShop.TechShop.service.Ram;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Criterianprice implements Criteria {
    private final String price;
    public Criterianprice(CategoryDTO dto) {
        this.price = dto.getPrice(); // Ensure getPrice() returns a double
    }
    public Criterianprice(String price) {
        this.price = price;
    }
    @Override
    public List<Category> meetCriteriaCategory(List<Category> categories) {
        List<Category> filteredCategories = new ArrayList<>();
        for (Category category : categories) {
            if (category.getPrice().contains(this.price)) {
                filteredCategories.add(category);
            }
        }
        return filteredCategories;
    }
    @Override
    public List<Ram> meetCriteriaRam(List<Ram> rams) {
        List<Ram> filteredRams = new ArrayList<>();
        for (Ram ram : rams) {
            if (ram.getName().contains(this.price)) {
                filteredRams.add(ram);
            }
        }
        return filteredRams;
    }
    public String get(){
        return this.price;
    }
}