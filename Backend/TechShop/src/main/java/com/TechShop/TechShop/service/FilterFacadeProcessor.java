package com.TechShop.TechShop.service;

import java.util.List;
import java.util.stream.Collectors;

import com.TechShop.TechShop.service.search.Criteria;
import com.TechShop.TechShop.service.search.CriteriaFactory;
import com.TechShop.TechShop.service.search.FilterDTO;

public class FilterFacadeProcessor {
    public static List<ProcessorsDto> filter(FilterDTO filterOn, List<Processors> processors, String criteria) {
        Criteria filter = CriteriaFactory.getCriteria(filterOn, criteria);  
        List<Processors> filteredProcessors = filter.meetCriteriaProcessors(processors); 
        List<ProcessorsDto> processorsDtos = filteredProcessors.stream()
                .map(processorsd -> new ProcessorsDto(processorsd.getName(), processorsd.getPrice(), processorsd.getSpecifications()))
                .collect(Collectors.toList());
        return processorsDtos;
    }
}
