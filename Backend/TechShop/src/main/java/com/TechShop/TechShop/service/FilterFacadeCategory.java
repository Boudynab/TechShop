package com.TechShop.TechShop.service;

import com.TechShop.TechShop.service.search.Criteria;
import com.TechShop.TechShop.service.search.CriteriaFactory;
import com.TechShop.TechShop.service.search.FilterDTO;

import java.util.List;
import java.util.stream.Collectors;

public class FilterFacadeCategory {
    public static List<CategoryDTO> filter(FilterDTO filterOn, List<Category> categories, String criteria) {
        Criteria filter = CriteriaFactory.getCriteria(filterOn, criteria);
        List<Category> filteredCategories = filter.meetCriteriaCategory(categories);
        List<CategoryDTO> categoryDTOs = filteredCategories.stream()
                .map(category -> new CategoryDTO(
                        category.getName(),
                        category.getPrice(),
                        category.getSpecifications()
                ))
                .collect(Collectors.toList());
        return categoryDTOs;
    }
}
