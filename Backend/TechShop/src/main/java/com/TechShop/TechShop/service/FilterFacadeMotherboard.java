package com.TechShop.TechShop.service;

import java.util.List;
import java.util.stream.Collectors;

import com.TechShop.TechShop.service.search.Criteria;
import com.TechShop.TechShop.service.search.CriteriaFactory;
import com.TechShop.TechShop.service.search.FilterDTO;

public class FilterFacadeMotherboard {
    public static List<MotherBoredDTO> filter(FilterDTO filterOn, List<MotherBoard> motherboards, String criteria) {
        Criteria filter = CriteriaFactory.getCriteria(filterOn, criteria);  
        List<MotherBoard> filteredMotherboards = filter.meetCriteriaMotherbored(motherboards); 
        List<MotherBoredDTO> motherboardDtos = filteredMotherboards.stream()
                .map(motherboard -> new MotherBoredDTO(motherboard.getName(), motherboard.getPrice(), motherboard.getSpecifications()))
                .collect(Collectors.toList());
        return motherboardDtos;
    }
}
