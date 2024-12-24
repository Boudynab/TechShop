package com.TechShop.TechShop.service.search;

import com.TechShop.TechShop.service.Category;
import com.TechShop.TechShop.service.Desktop;
import com.TechShop.TechShop.service.Mobile;
import com.TechShop.TechShop.service.MotherBoard;
import com.TechShop.TechShop.service.Processors;
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
    public List<Desktop> meetCriteriaDesktop(List<Desktop> desktops) {
        Set<Desktop> criteriaFilters = new HashSet<>();
        if (criteria1 != null) {
            criteriaFilters.addAll(criteria1.meetCriteriaDesktop(desktops));
        }
        if (criteria2 != null) {
            criteriaFilters.addAll(criteria2.meetCriteriaDesktop(desktops));
        }
        if (criteria3 != null) {
            criteriaFilters.addAll(criteria3.meetCriteriaDesktop(desktops));
        }
        return new ArrayList<>(criteriaFilters);
    }
    @Override
    public List<Mobile> meetCriteriaMobiles(List<Mobile> mobiles) {
        Set<Mobile> criteriaFilters = new HashSet<>();
        if (criteria1 != null) {
            criteriaFilters.addAll(criteria1.meetCriteriaMobiles(mobiles));
        }
        if (criteria2 != null) {
            criteriaFilters.addAll(criteria2.meetCriteriaMobiles(mobiles));
        }
        if (criteria3 != null) {
            criteriaFilters.addAll(criteria3.meetCriteriaMobiles(mobiles));
        }
        return new ArrayList<>(criteriaFilters);
    }
    @Override
    public List<Processors> meetCriteriaProcessors(List<Processors> processors) {
        Set<Processors> criteriaFilters = new HashSet<>();
        if (criteria1 != null) {
            criteriaFilters.addAll(criteria1.meetCriteriaProcessors(processors));
        }
        if (criteria2 != null) {
            criteriaFilters.addAll(criteria2.meetCriteriaProcessors(processors));
        }
        if (criteria3 != null) {
            criteriaFilters.addAll(criteria3.meetCriteriaProcessors(processors));
        }
        return new ArrayList<>(criteriaFilters);
    }
    @Override
    public List<MotherBoard> meetCriteriaMotherbored(List<MotherBoard> motherBoards) {
        Set<MotherBoard> criteriaFilters = new HashSet<>();
        if (criteria1 != null) {
            criteriaFilters.addAll(criteria1.meetCriteriaMotherbored(motherBoards));
        }
        if (criteria2 != null) {
            criteriaFilters.addAll(criteria2.meetCriteriaMotherbored(motherBoards));
        }
        if (criteria3 != null) {
            criteriaFilters.addAll(criteria3.meetCriteriaMotherbored(motherBoards));
        }
        return new ArrayList<>(criteriaFilters);
    }
    @Override
    public String get() {
        return null;
    }
}
