package com.TechShop.TechShop.service.search;

import com.TechShop.TechShop.service.Category;
import com.TechShop.TechShop.service.CategoryDTO;
import com.TechShop.TechShop.service.Ram;

import java.util.ArrayList;
import java.util.List;

public class Criterianame implements Criteria {
    private final String name;
    public Criterianame(CategoryDTO dto) {
        this.name = dto.getName();
    }
    public Criterianame(String criteria) {
        this.name = criteria;
    }
    @Override
    public List<Category> meetCriteriaCategory(List<Category> categories) {
        List<Category> filteredCategories = new ArrayList<>();
        for (Category category : categories) {
            if (category.getName().contains(this.name)) {
                filteredCategories.add(category);
            }
        }
        return filteredCategories;
    }
    @Override
    public List<Ram> meetCriteriaRam(List<Ram> rams) {
        List<Ram> filteredRams = new ArrayList<>();
        for (Ram ram : rams) {
            if (ram.getName().contains(this.name)) {
                filteredRams.add(ram);
            }
        }
        return filteredRams;
    }
    public String get() {
        return this.name;
    }
}
