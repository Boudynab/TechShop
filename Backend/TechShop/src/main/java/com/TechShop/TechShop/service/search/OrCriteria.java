package com.TechShop.TechShop.service.search;

import com.TechShop.TechShop.service.Category;
import com.TechShop.TechShop.service.Ram;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class OrCriteria implements Criteria {
    private Criteria criteria1;
    private Criteria criteria2;
    private Criteria criteria3;

    public OrCriteria(String criteria) {
        this.criteria1 = new Criterianame(criteria);
        this.criteria2 = new Criterianprice(criteria);
        this.criteria3 = null; 
    }
    @Override
    public List<Category> meetCriteriaCategory(List<Category> categories) {
        Set<Category> criteriaFilters = new HashSet<>();
        if (criteria1 != null) {
            criteriaFilters.addAll(criteria1.meetCriteriaCategory(categories));
        }
        if (criteria2 != null) {
            criteriaFilters.addAll(criteria2.meetCriteriaCategory(categories));
        }
        if (criteria3 != null) {
            criteriaFilters.addAll(criteria3.meetCriteriaCategory(categories));
        }
        return new ArrayList<>(criteriaFilters);
    }
    @Override
    public List<Ram> meetCriteriaRam(List<Ram> rams) {
        Set<Ram> criteriaFilters = new HashSet<>();
        if (criteria1 != null) {
            criteriaFilters.addAll(criteria1.meetCriteriaRam(rams));
        }
        if (criteria2 != null) {
            criteriaFilters.addAll(criteria2.meetCriteriaRam(rams));
        }
        if (criteria3 != null) {
            criteriaFilters.addAll(criteria3.meetCriteriaRam(rams));
        }
        return new ArrayList<>(criteriaFilters);
    }
    @Override
    public String get() {
        return null;
    }
}
