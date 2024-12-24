package com.TechShop.TechShop.service;

import java.util.List;
import java.util.stream.Collectors;

import com.TechShop.TechShop.service.search.Criteria;
import com.TechShop.TechShop.service.search.CriteriaFactory;
import com.TechShop.TechShop.service.search.FilterDTO;

public class FilterFacadeMobile {
    public static List<MobileDTO> filter(FilterDTO filterOn, List<Mobile> mobiles, String criteria) {
        Criteria filter = CriteriaFactory.getCriteria(filterOn, criteria);  
        List<Mobile> filteredMobiles = filter.meetCriteriaMobiles(mobiles); 
        List<MobileDTO> mobileDTOs = filteredMobiles.stream()
                .map(mobile -> new MobileDTO(mobile.getName(), mobile.getPrice(), mobile.getSpecifications()))
                .collect(Collectors.toList());
        return mobileDTOs;
    }
}
