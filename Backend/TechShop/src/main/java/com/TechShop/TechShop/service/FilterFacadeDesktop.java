package com.TechShop.TechShop.service;

import java.util.List;
import java.util.stream.Collectors;

import com.TechShop.TechShop.service.search.Criteria;
import com.TechShop.TechShop.service.search.CriteriaFactory;
import com.TechShop.TechShop.service.search.FilterDTO;

public class FilterFacadeDesktop {
    public static List<DesktopDTO> filter(FilterDTO filterOn, List<Desktop> desktops, String criteria) {
        Criteria filter = CriteriaFactory.getCriteria(filterOn, criteria);  // Assumes CriteriaFactory is correctly implemented
        List<Desktop> filteredDesktops = filter.meetCriteriaDesktop(desktops);  // Filter the list of desktops based on criteria
        List<DesktopDTO> desktopDTOs = filteredDesktops.stream()
                .map(desktop -> new DesktopDTO(desktop.getName(), desktop.getPrice(), desktop.getSpecifications()))
                .collect(Collectors.toList());
        return desktopDTOs;
    }
}
