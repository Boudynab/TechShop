package com.TechShop.TechShop.service;

import com.TechShop.TechShop.service.search.Criteria;
import com.TechShop.TechShop.service.search.CriteriaFactory;
import com.TechShop.TechShop.service.search.FilterDTO;

import java.util.List;
import java.util.stream.Collectors;

public class FilterFacadeRams {
    public static List<RamDTO> filter(FilterDTO filterOn, List<Ram> rams, String criteria) {
        Criteria filter = CriteriaFactory.getCriteria(filterOn, criteria);  // Assumes CriteriaFactory is correctly implemented
        List<Ram> filteredRams = filter.meetCriteriaRam(rams);  // Filter the list of rams based on criteria
        List<RamDTO> ramDTOs = filteredRams.stream()
                .map(ram -> new RamDTO(ram.getName(), ram.getPrice(), ram.getSpecifications()))
                .collect(Collectors.toList());
        return ramDTOs;
    }
}
